import { Database } from "@rozbehsharahi/file-store/database";
import { computed, ComputedRef } from "vue";
import { Row, Entity } from "@rozbehsharahi/file-store/types";

interface IComposableDatabase {
  database: ComputedRef<Database>;
  isDirty: ComputedRef<boolean>;
  saveAll: () => Promise<void>;
  all: (table: string) => Entity[];
  get: (table: string, identifier: number) => Entity;
  create: (table: string, row: Row) => Database;
  update: (table: string, row: Entity) => Database;
}

export function useDatabase(database: Database): IComposableDatabase {
  const db = computed(() => database);

  const isDirty = computed(() => db.value.isDirty());

  return {
    database: db,
    isDirty,
    all: (table: string) => {
      return db.value.all(table);
    },
    get: (table: string, identifier: number): Entity => {
      return db.value.get(table, identifier);
    },
    create: (table: string, row: Row) => {
      return db.value.create(table, row);
    },
    update: (table: string, entity: Entity) => {
      return db.value.update(table, entity);
    },
    saveAll: () => {
      return db.value.saveAll();
    },
  };
}
