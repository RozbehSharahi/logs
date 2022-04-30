import { Log } from "@/model/log";
import { useDatabase } from "@/composables/file-store-database";
import { computed, ComputedRef } from "vue";
import { Tag } from "@/model/tag";

interface IComposable {
  logs: ComputedRef<Log[]>;
  logsSorted: ComputedRef<Log[]>;
  logsByMonth: ComputedRef<LogsByMonth>;
  logsByTag: ComputedRef<LogsByTag>;
  monthYears: ComputedRef<Date[]>;
  tags: ComputedRef<Tag[]>;
  getLogsGroupedByDay: (logs: Log[]) => LogsByDay;
  getLogsGroupedByMonth: (logs: Log[]) => LogsByMonth;
  getLogsGroupedByTag: (logs: Log[]) => LogsByTag;
  getLogsByMonth: (logs: Log[], year: number, month: number) => Log[];
  getLogsByTagAndMonth: (
    logs: Log[],
    tag: Tag,
    year: number,
    month: number
  ) => Log[];
}

export type LogsByDay = {
  item: Date;
  logs: Log[];
}[];

export type LogsByMonth = {
  item: Date;
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
  const monthYears = computed(() => getMonthYears(logsSorted.value));
  const tags = computed(() => getTags(logsSorted.value));

  const getMonthYears = (logs: Log[]): Date[] => {
    const monthYears: { [monthYear: string]: Date } = {};
    for (const log of logs) {
      const year = log.getDate().getFullYear();
      const month = log.getDate().getMonth() + 1;
      monthYears[`${year}-${month}`] = new Date(`${year}-${month}-1`);
    }
    return Object.values(monthYears);
  };

  const getTags = (logs: Log[]): Tag[] => {
    const tags: { [key: number]: Tag } = {};
    for (const log of logs) {
      for (const tag of log.getRelations().getTags()) {
        const identifier = tag.getIdentifier();
        if (!identifier) continue;
        tags[identifier] = tag;
      }
    }
    return Object.values(tags);
  };

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
    return group(logs, (log) => {
      const year = log.getDate().getFullYear();
      const month = log.getDate().getMonth();
      return {
        key: `${year}/${month}`,
        item: new Date(year, month, 1, 1, 0, 0),
      };
    });
  };

  const getLogsGroupedByDay = (logs: Log[]) => {
    return group(logs, (log) => {
      const year = log.getDate().getFullYear();
      const month = log.getDate().getMonth();
      const day = log.getDate().getDate();
      return {
        key: `${year}/${month}/${day}`,
        item: new Date(year, month, day),
      };
    });
  };

  const group = (
    logs: Log[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getGroup: (log: Log) => { key: string; item: any }
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const groups: { [key: string]: { item: any; logs: Log[] } } = {};
    for (const log of logs) {
      const group = getGroup(log);
      groups[group.key] = {
        item: group.item,
        logs: groups[group.key] ? [...groups[group.key].logs, log] : [log],
      };
    }
    return Object.values(groups);
  };

  const getLogsByMonth = (logs: Log[], year: number, month: number): Log[] => {
    return logs.filter(
      (log) =>
        log.getDate().getFullYear() === year &&
        log.getDate().getMonth() + 1 === month
    );
  };

  const getLogsByTag = (logs: Log[], tag: Tag): Log[] => {
    const tagIdentifier = tag.getIdentifier();
    if (!tagIdentifier) return [];
    return logs.filter((log) => log.getTags().includes(tagIdentifier));
  };

  const getLogsByTagAndMonth = (
    logs: Log[],
    tag: Tag,
    year: number,
    month: number
  ): Log[] => {
    return getLogsByTag(getLogsByMonth(logs, year, month), tag);
  };

  return {
    logs,
    logsSorted,
    logsByMonth,
    logsByTag,
    monthYears,
    tags,
    getLogsByMonth,
    getLogsGroupedByDay,
    getLogsGroupedByMonth,
    getLogsGroupedByTag,
    getLogsByTagAndMonth,
  };
}

function sortByDate(a: Log, b: Log) {
  return a.getDate().getTime() - b.getDate().getTime();
}
