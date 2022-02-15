import Dexie, { Table } from "dexie";

class Database extends Dexie {
  fileHandles!: Table<{
    id?: number;
    key: string;
    handle: FileSystem.Handle;
  }>;

  constructor() {
    super("file-system-database");
    this.version(1).stores({
      fileHandles: "++id,key",
    });
  }
}

export const database = new (class FileSystemDatabase {
  private database: Database;
  constructor() {
    this.database = new Database();
  }
  async store(key: string, handle: FileSystem.Handle): Promise<void> {
    this.database.fileHandles.where("key").equals(key).delete();
    this.database.fileHandles.add({ key, handle });
  }
  async get(key: string): Promise<FileSystem.Handle | null> {
    const entry = await this.database.fileHandles
      .where("key")
      .equals(key)
      .first();

    return entry ? entry.handle : null;
  }
})();
