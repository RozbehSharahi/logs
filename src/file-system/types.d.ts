declare namespace FileSystem {
  declare interface Handle {
    getFile(): Promise<File>;
    createWritable(): Promise<WritableHandle>;
    requestPermission(options: { mode: string }): Promise<string>;
    queryPermission(options: { mode: string }): Promise<string>;
  }

  declare interface WritableHandle {
    write(content: string);
    close(): void;
  }

  declare interface Type {
    description: string;
    accept: { [key: string]: string | string[] };
  }

  declare namespace SaveFile {
    declare interface Options {
      suggestedName?: string;
      types?: Type[];
      excludeAcceptAllOption?: boolean;
    }
  }

  declare namespace OpenFile {
    declare interface Options {
      multiple?: boolean;
      types?: Type[];
      excludeAcceptAllOption?: boolean;
    }
  }
}

declare interface Window {
  showSaveFilePicker(
    options?: FileSystem.SaveFile.Options
  ): Promise<FileSystem.Handle>;
  showOpenFilePicker(
    options?: FileSystem.OpenFile.Options
  ): Promise<FileSystem.Handle[]>;
}
