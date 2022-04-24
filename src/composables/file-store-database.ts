import { computed, ComputedRef, onMounted, Ref, ref } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import { Database } from "@rozbehsharahi/file-store/database";
import { Normalizer } from "@rozbehsharahi/file-store/types";

interface IComposableFileStore {
  fileStore: Ref<typeof fileStore>;
}

export function useFileStore(): IComposableFileStore {
  return {
    fileStore: ref(fileStore) as Ref<typeof fileStore>,
  };
}

interface IComposableDatabase {
  isReady: Ref<boolean>;
  isDatabaseLoaded: ComputedRef<boolean>;
  isStoredInSession: Ref<boolean | null>;
  database: ComputedRef<Database>;
  createDatabase: () => Promise<void>;
  pickDatabase: () => Promise<void>;
  pickDatabaseFromSession: () => Promise<void>;
  unregisterDatabase: () => Promise<void>;
  registerNormalizer: (
    table: string,
    normalizer: Normalizer
  ) => typeof fileStore;
}

export function useDatabase(databaseName = "default"): IComposableDatabase {
  const { fileStore } = useFileStore();
  const isReady = ref(false);
  const isInSession = ref<boolean | null>(null);
  const isDatabaseLoaded = computed(() =>
    fileStore.value.isDatabaseRegistered(databaseName)
  );
  const database = computed(() => fileStore.value.getDatabase(databaseName));

  onMounted(async () => {
    isInSession.value = await fileStore.value.isDatabaseStored(databaseName);
    isReady.value = true;
  });

  return {
    isReady,
    isDatabaseLoaded,
    isStoredInSession: isInSession,
    database,
    createDatabase: () => {
      return fileStore.value.createAndRegisterDatabase(databaseName);
    },
    pickDatabase: () => {
      return fileStore.value.pickAndRegisterDatabase(databaseName);
    },
    pickDatabaseFromSession: () => {
      return fileStore.value.pickFromSessionAndRegisterDatabase(databaseName);
    },
    unregisterDatabase: () => {
      return fileStore.value.unregisterDatabase(databaseName);
    },
    registerNormalizer: (table: string, normalizer: Normalizer) => {
      return fileStore.value.registerSerializer(
        table,
        normalizer,
        databaseName
      );
    },
  };
}
