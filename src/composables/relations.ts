import { Tag } from "@/model/tag";
import { Log } from "@/model/log";
import { ref } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";

interface IRelationsComposable {
  getLogTags: (log: Log) => Tag[];
}

export function useRelations(databaseName = "default"): IRelationsComposable {
  const db = ref(fileStore.getDatabase(databaseName));

  const getLogTags = (log: Log): Tag[] => {
    return log
      .getTags()
      .map((tagId) => db.value.get("tag", tagId))
      .filter((v) => v);
  };

  return {
    getLogTags,
  };
}
