import { Log } from "@/model/log";
import { useDatabase } from "@/composables/file-store-database";
import { computed, ComputedRef } from "vue";
import { monthName, sum } from "@/utils/utils";

interface IComposable {
  logs: ComputedRef<Log[]>;
  logsSorted: ComputedRef<Log[]>;
  logsByMonth: ComputedRef<LogsByMonth>;
  getLogsOfMonth: (year: number, month: number) => Log[];
  getMonthHoursOfYear: (year: number) => IMonthHour[];
}

interface IMonthHour {
  hours: number;
  date: Date;
  name: string;
}

export type LogsByMonth = {
  year: number;
  month: number;
  monthName: string;
  hours: number;
  logs: Log[];
}[];

export function useLogs(): IComposable {
  const { database: db } = useDatabase();

  const logs = computed((): Log[] => db.value.all("log"));
  const logsSorted = computed(() => logs.value.sort(sortByDate));

  const logsByMonth = computed(() => {
    const logsByMonth: LogsByMonth = [];
    const logsMap: { [year: string]: { [month: string]: Log[] } } = {};
    for (const log of logsSorted.value) {
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
        parseInt(`${b.year}${b.month}`) - parseInt(`${a.year}${a.month}`)
    );
  });

  const getLogsOfMonth = (year: number, month: number): Log[] => {
    return logs.value.filter((log) => log.getDate().getMonth() === month - 1);
  };

  const getMonthHoursOfYear = (year: number): IMonthHour[] => {
    const monthHours: IMonthHour[] = [];
    for (let month = 1; month <= 12; month++) {
      monthHours.push({
        name: month.toString(),
        date: new Date(year, month - 1, 1, 1, 0, 0),
        hours: sum(getLogsOfMonth(year, month).map((v) => v.getHours())),
      });
    }
    return monthHours;
  };

  return { logs, logsSorted, logsByMonth, getLogsOfMonth, getMonthHoursOfYear };
}

function sortByDate(a: Log, b: Log) {
  return b.getDate().getTime() - a.getDate().getTime();
}
