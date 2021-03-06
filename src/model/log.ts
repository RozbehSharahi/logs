import { Normalizer, Row } from "@rozbehsharahi/file-store/types";
import { Tag } from "@/model/tag";
import { useRelations } from "@/composables/relations";

export interface IData {
  identifier?: number | null;
  content?: string;
  hours?: number;
  date?: Date;
  tags?: number[];
}

export class Log {
  private readonly content: string;
  private readonly identifier: number | null;
  private readonly hours: number;
  private readonly date: Date;
  private readonly tags: number[];

  constructor(data: IData = {}) {
    this.identifier = data.identifier || null;
    this.content = data.content || "";
    this.hours = data.hours || 1;
    this.date = data.date || new Date();
    this.tags = data.tags || [];
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

  getMonthString(): string {
    return `${this.date.getFullYear()}/${this.date.getMonth() + 1}`;
  }

  getTags(): number[] {
    return this.tags;
  }

  getRelations(): { getTags: () => Tag[] } {
    return {
      getTags: () => useRelations().getLogTags(this),
    };
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
        tags: log.getTags(),
      }),
      denormalize: (row: Row): Log => {
        row.date = row.date ? new Date(row.date) : new Date();
        row.tags = row.tags || [];
        return new Log(row);
      },
    };
  }
}
