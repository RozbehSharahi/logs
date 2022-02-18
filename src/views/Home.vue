<template>
  <div>
    <the-database-picker
      v-if="!services.database.isReady()"
      @update:database="updateDatabase"
    />
    <the-logs v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { database } from "@/database/database";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";
import TheLogs from "@/components/TheLogs.vue";
import { FileHandle } from "@/file-system/model/file-handle";

export default defineComponent({
  components: { TheLogs, TheDatabasePicker },

  setup() {
    const state = reactive({
      started: false,
    });

    const services = reactive({
      database,
    });

    return {
      state,
      services,
      async updateDatabase(database: FileHandle) {
        await services.database.setDatabaseFile(database);
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.the-database-picker {
  max-width: 500px;
}
</style>
