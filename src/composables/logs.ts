import { Log } from "@/model/log";
import { useDatabase } from "@/composables/file-store-database";
import { computed, ComputedRef } from "vue";
import { monthName, sum } from "@/utils/utils";
import { Tag } from "@/model/tag";

interface IComposable {
  logs: ComputedRef<Log[]>;
  logsSorted: ComputedRef<Log[]>;
  logsByMonth: ComputedRef<LogsByMonth>;
  logsByTag: ComputedRef<LogsByTag>;
  getLogsGroupedByMonth: (logs: Log[]) => LogsByMonth;
  getLogsGroupedByTag: (logs: Log[]) => LogsByTag;
  getLogsByMonth: (logs: Log[], year: number, month: number) => Log[];
}

export type LogsByMonth = {
  year: number;
  month: number;
  monthName: string;
  hours: number;
  logs: Log[];
}[];

export type LogsByTag = {
  tag: Tag;
  logs: Log[];
}[];

export function useLogs(): IComposable {
  const { database: db } = useDatabase();

  const logs = computed((): Log[] => db.value.all("log"));
  const logsSorted = computed(() => logs.value.sort(sortByDate));
  const logsByMonth = computed(() => getLogsGroupedByMonth(logsSorted.value));
  const logsByTag = computed(() => getLogsGroupedByTag(logsSorted.value));

  const getLogsGroupedByTag = (logs: Log[]): LogsByTag => {
    const logsMap: { [tag: string]: { tag: Tag; logs: Log[] } } = {};
    for (const log of logs) {
      for (const tag of log.getRelations().getTags()) {
        const tagIdentifier = tag.getIdentifier();
        if (!tagIdentifier) continue;
        if (!logsMap[tagIdentifier]) logsMap[tagIdentifier] = { tag, logs: [] };
        logsMap[tagIdentifier].logs.push(log);
      }
    }
    return Object.values(logsMap);
  };

  const getLogsGroupedByMonth = (logs: Log[]): LogsByMonth => {
    const logsByMonth: LogsByMonth = [];
    const logsMap: { [year: string]: { [month: string]: Log[] } } = {};
    for (const log of logs) {
      const year = log.getDate().getFullYear();
      const month = log.getDate().getMonth() + 1;
      if (!logsMap[year]) logsMap[year] = {};
      if (!logsMap[year][month]) logsMap[year][month] = [];
      logsMap[year][month].push(log);
    }
    for (const year in logsMap) {
      for (const month in logsMap[year]) {
        logsByMonth.push({
          year: parseInt(year),
          month: parseInt(month),
          monthName: monthName(parseInt(month)),
          hours: sum(logsMap[year][month].map((i) => i.getHours())),
          logs: logsMap[year][month],
        });
      }
    }
    return logsByMonth.sort(
      (a, b) =>
        parseInt(`${a.year}${a.month}`) - parseInt(`${b.year}${b.month}`)
    );
  };

  const getLogsByMonth = (logs: Log[], year: number, month: number): Log[] => {
    return logs.filter(
      (log) =>
        log.getDate().getFullYear() === year &&
        log.getDate().getMonth() + 1 === month
    );
  };

  return {
    logs,
    logsSorted,
    logsByMonth,
    logsByTag,
    getLogsByMonth,
    getLogsGroupedByMonth,
    getLogsGroupedByTag,
  };
}

function sortByDate(a: Log, b: Log) {
  return a.getDate().getTime() - b.getDate().getTime();
}
