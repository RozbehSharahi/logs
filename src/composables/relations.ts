import { Tag } from "@/model/tag";
import { useDatabase } from "@/composables/database";
import { useFileStore } from "@/composables/file-store";
import { Log } from "@/model/log";

interface IRelationsComposable {
  getLogTags: (log: Log) => Tag[];
}

export function useRelations(): IRelationsComposable {
  const { get } = useDatabase(useFileStore().database.value);

  const getLogTags = (log: Log): Tag[] => {
    return log
      .getTags()
      .map((tagId) => get("tag", tagId))
      .filter((v) => v);
  };

  return {
    getLogTags,
  };
}
