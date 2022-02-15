import { database } from "./database";
import { FileHandle } from "./model/file-handle";

export const service = new (class FileSystemService {
  async pickFile(options?: FileSystem.OpenFile.Options): Promise<FileHandle> {
    const [file] = await window.showOpenFilePicker(options);
    if (!file) throw new Error("No file picked");
    return new FileHandle(file);
  }
  async createFile(options?: FileSystem.SaveFile.Options): Promise<FileHandle> {
    const file = await window.showSaveFilePicker(options);
    if (!file) throw new Error("No file picked");
    return new FileHandle(file);
  }
  async fromStore(key: string): Promise<FileHandle | null> {
    const handle = await database.get(key);

    return handle ? new FileHandle(handle) : null;
  }

  async store(name: string, file: FileHandle): Promise<void> {
    await database.store(name, file.getHandle());
  }
})();
