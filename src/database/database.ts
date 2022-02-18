import { Log } from "@/model/log";
import { FileHandle } from "@/file-system/model/file-handle";

export const database = new (class Database {
  private databaseFile: FileHandle | null = null;

  logs: Log[] = [];

  isReady() {
    return !!this.databaseFile;
  }

  async setDatabaseFile(databaseFile: FileHandle) {
    const hasPermission =
      (await databaseFile
        .getHandle()
        .queryPermission({ mode: "readwrite" })) === "granted";

    if (!hasPermission) {
      await databaseFile.getHandle().requestPermission({ mode: "readwrite" });
    }
    const data = JSON.parse(await databaseFile.fetchContent());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.logs = data.logs ? data.logs.map((v: any) => new Log(v)) : [];
    this.databaseFile = databaseFile;
  }

  async save() {
    if (!this.isReady()) throw new Error("No database file was set yet!");
    const data = JSON.stringify({ logs: this.logs });
    await (this.databaseFile as FileHandle).updateContent(data);
  }
})();
