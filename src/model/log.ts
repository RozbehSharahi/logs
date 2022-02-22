import { Normalizer, Row } from "@rozbehsharahi/file-store/types";

export interface IData {
  identifier?: number | null;
  content?: string;
  hours?: number;
  date?: Date;
}

export class Log {
  private readonly content: string;
  private readonly identifier: number | null;
  private readonly hours: number;
  private readonly date: Date;

  constructor(data: IData = {}) {
    this.identifier = data.identifier || null;
    this.content = data.content || "";
    this.hours = data.hours || 1;
    this.date = data.date || new Date();
  }

  getIdentifier(): number | null {
    return this.identifier;
  }

  getContent(): string {
    return this.content;
  }

  getHours(): number {
    return this.hours;
  }

  getDate(): Date {
    return this.date;
  }

  getDateString(): string {
    const date = this.date;
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  static getNormalizer(): Normalizer {
    return {
      normalize: (log: Log) => ({
        identifier: log.getIdentifier(),
        content: log.getContent(),
        hours: log.getHours(),
        date: log.getDate(),
      }),
      denormalize: (row: Row): Log => {
        row.date = new Date(row.date);
        return new Log(row);
      },
    };
  }
}
