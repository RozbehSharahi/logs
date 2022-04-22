import { computed, ComputedRef, onMounted, Ref, ref } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import { Database } from "@rozbehsharahi/file-store/database";

interface IFileStoreComposable {
  service: Ref<typeof fileStore>;
  isReady: ComputedRef<boolean>;
  isLastDatabaseStored: Ref<null | boolean>;
  isDatabaseRegistered: ComputedRef<boolean>;
  database: ComputedRef<Database>;
  createDatabase: () => Promise<void>;
  pickDatabase: () => Promise<void>;
  pickDatabaseFromSession: () => Promise<void>;
  unregisterDatabase: () => Promise<void>;
}

export function useFileStore(name = "default"): IFileStoreComposable {
  const service = ref(fileStore);
  const isLastDatabaseStored = ref<boolean | null>(null);
  const database = computed(() => service.value.getDatabase(name));
  const isReady = computed(() => isLastDatabaseStored.value !== null);
  const isDatabaseRegistered = computed(() =>
    service.value.isDatabaseRegistered(name)
  );

  onMounted(async () => {
    isLastDatabaseStored.value = await service.value.isDatabaseStored(name);
  });

  return {
    service: service as Ref<typeof fileStore>,
    database,
    isReady,
    isDatabaseRegistered,
    isLastDatabaseStored,
    createDatabase: () => {
      return service.value.createAndRegisterDatabase(name);
    },
    pickDatabase: () => {
      return service.value.pickAndRegisterDatabase(name);
    },
    pickDatabaseFromSession: () => {
      return service.value.pickFromSessionAndRegisterDatabase(name);
    },
    unregisterDatabase: () => {
      return service.value.unregisterDatabase(name);
    },
  };
}
