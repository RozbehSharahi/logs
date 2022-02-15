export class FileHandle {
  private readonly handle: FileSystem.Handle;

  constructor(handle: FileSystem.Handle) {
    this.handle = handle;
  }

  getHandle(): FileSystem.Handle {
    return this.handle;
  }

  async fetchContent(): Promise<string> {
    const file = await this.handle.getFile();
    return await file.text();
  }

  async updateContent(content: string): Promise<this> {
    const writeable = await this.handle.createWritable();
    writeable.write(content);
    writeable.close();
    return this;
  }
}
