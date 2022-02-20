import { Normalizer, Row } from "@rozbehsharahi/file-store/types";

interface Data {
  identifier?: number | null;
  content?: string;
}

export class Log {
  private readonly content: string;
  private readonly identifier: number | null;

  constructor(data: Data) {
    this.identifier = data.identifier || null;
    this.content = data.content || "";
  }

  getIdentifier(): number | null {
    return this.identifier;
  }

  getContent(): string {
    return this.content;
  }

  static getNormalizer(): Normalizer {
    return {
      normalize: (log: Log) => ({
        identifier: log.getIdentifier(),
        content: log.getContent(),
      }),
      denormalize: (row: Row): Log => new Log(row),
    };
  }
}
