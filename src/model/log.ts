import { Normalizer, Row } from "@rozbehsharahi/file-store/types";

interface Data {
  identifier?: number | null;
  content?: string;
  hours?: number;
}

export class Log {
  private readonly content: string;
  private readonly identifier: number | null;
  private readonly hours: number;

  constructor(data: Data) {
    this.identifier = data.identifier || null;
    this.content = data.content || "";
    this.hours = data.hours || 1;
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

  static getNormalizer(): Normalizer {
    return {
      normalize: (log: Log) => ({
        identifier: log.getIdentifier(),
        content: log.getContent(),
        hours: log.getHours(),
      }),
      denormalize: (row: Row): Log => new Log(row),
    };
  }
}
