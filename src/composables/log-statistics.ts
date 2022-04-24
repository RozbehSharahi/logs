import { Log } from "@/model/log";
import { useDatabase } from "@/composables/file-store-database";

interface IComposable {
  getLogsOfMonth: (year: number, month: number) => Log[];
  getMonthHoursOfYear: (year: number) => MonthHour[];
}

interface MonthHour {
  hours: number;
  date: Date;
  name: string;
}

function sumArray(array: number[]) {
  let sum = 0;

  array.forEach((item) => {
    sum += item;
  });

  return sum;
}

export function useLogStatistics(): IComposable {
  const { database: db } = useDatabase();
  const logs: Log[] = db.value.all("log");

  const getLogsOfMonth = (year: number, month: number): Log[] => {
    return logs.filter((log) => log.getDate().getMonth() === month - 1);
  };

  const getMonthHoursOfYear = (year: number): MonthHour[] => {
    const monthHours: MonthHour[] = [];
    for (let month = 1; month <= 12; month++) {
      monthHours.push({
        name: month.toString(),
        date: new Date(year, month - 1, 1, 1, 0, 0),
        hours: sumArray(getLogsOfMonth(year, month).map((v) => v.getHours())),
      });
    }
    return monthHours;
  };

  return { getLogsOfMonth, getMonthHoursOfYear };
}
