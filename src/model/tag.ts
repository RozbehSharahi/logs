import { Normalizer, Row } from "@rozbehsharahi/file-store/types";

export interface IData {
  identifier?: number | null;
  label: string;
}

export class Tag {
  private readonly label: string;
  private readonly identifier: number | null;

  constructor(data: IData) {
    this.identifier = data.identifier || null;
    this.label = data.label;
  }

  getIdentifier(): number | null {
    return this.identifier;
  }

  getLabel(): string {
    return this.label;
  }

  static getNormalizer(): Normalizer {
    return {
      normalize: (tag: Tag) => ({
        identifier: tag.getIdentifier(),
        label: tag.getLabel(),
      }),
      denormalize: (row: Row): Tag => {
        return new Tag(row);
      },
    };
  }
}
