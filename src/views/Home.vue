<template>
  <div>
    <the-status-bar
      v-if="services.fileStore.isDatabaseRegistered()"
      class="mb-30"
    />
    <the-database-picker v-if="!services.fileStore.isDatabaseRegistered()" />
    <the-logs v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";
import TheLogs from "@/components/TheLogs.vue";
import { fileStore } from "@rozbehsharahi/file-store/file-store";
import TheStatusBar from "@/components/TheStatusBar.vue";

export default defineComponent({
  components: { TheStatusBar, TheLogs, TheDatabasePicker },

  setup() {
    const services = reactive({
      fileStore,
    });

    return {
      services,
    };
  },
});
</script>
<style lang="scss" scoped>
.the-database-picker {
  max-width: 500px;
}
</style>
