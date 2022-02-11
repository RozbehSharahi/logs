<template>
  <div>
    <database-picker v-if="!database" @update:database="updateDatabase" />
    <div v-else>
      <logs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DatabasePicker from "@/components/DatabasePicker.vue";
import Logs from "@/components/Logs.vue";

export default defineComponent({
  components: { Logs, DatabasePicker },

  setup() {
    const database = ref<FileSystem.Handle>();

    const updateDatabase = (d: FileSystem.Handle) => {
      database.value = d;
    };

    return {
      database,
      updateDatabase,
    };
  },
});
</script>
