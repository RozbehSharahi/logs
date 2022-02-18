interface ILog {
  content: string;
}

export class Log {
  private content: string;

  constructor(data: ILog) {
    this.content = data.content;
  }

  getContent(): string {
    return this.content;
  }

  setContent(content: string): this {
    this.content = content;
    return this;
  }
}
