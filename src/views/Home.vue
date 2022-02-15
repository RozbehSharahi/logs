<template>
  <div>
    <the-database-picker v-if="!database" @update:database="updateDatabase" />
    <div v-else>
      <the-logs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";
import TheLogs from "@/components/TheLogs.vue";

export default defineComponent({
  components: { TheLogs, TheDatabasePicker },

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
<style lang="scss" scoped>
.the-database-picker {
  max-width: 500px;
}
</style>
