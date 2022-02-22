<template>
  <div>
    <the-status-bar
      v-if="services.fileStore.isDatabaseRegistered()"
      class="mb-30"
    />
    <the-database-picker v-if="!services.fileStore.isDatabaseRegistered()" />
    <div v-else>
      <the-grid>
        <div class="w-3/4">
          <the-logs />
        </div>
        <div class="w-1/4">
          <the-tags />
        </div>
      </the-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";
import TheLogs from "@/components/TheLogs.vue";
import { fileStore } from "@rozbehsharahi/file-store/file-store";
import TheStatusBar from "@/components/TheStatusBar.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheTags from "@/components/TheTags.vue";

export default defineComponent({
  components: { TheTags, TheGrid, TheStatusBar, TheLogs, TheDatabasePicker },

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
  max-width: 600px;
}
</style>
