export const fileSystem = new (class FileSystem {
  async pickFile(options?: FileSystem.OpenFile.Options): Promise<FileHandle> {
    const [file] = await window.showOpenFilePicker(options);
    if (!file) throw new Error("No file picked");
    return new FileHandle(file);
  }
  async createFile(options?: FileSystem.SaveFile.Options): Promise<FileHandle> {
    const file = await window.showSaveFilePicker(options);
    if (!file) throw new Error("Aborted creation of file.");
    return new FileHandle(file);
  }
})();

export class FileHandle {
  private handle: FileSystem.Handle;

  constructor(handle: FileSystem.Handle) {
    this.handle = handle;
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
