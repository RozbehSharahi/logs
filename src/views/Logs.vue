<template>
  <div v-if="isDatabaseRegistered">
    <the-status-bar class="mb-30" />
    <the-grid>
      <div class="w-3/4">
        <the-logs />
      </div>
      <div class="w-1/4">
        <the-tags />
      </div>
    </the-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLogs from "@/components/TheLogs.vue";
import TheStatusBar from "@/components/TheStatusBar.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheTags from "@/components/TheTags.vue";
import { useFileStore } from "@/composables/file-store";
import { useRouter } from "vue-router";
import { watchImmediate } from "@/utils/vue-utils";

export default defineComponent({
  components: { TheTags, TheGrid, TheStatusBar, TheLogs },

  setup() {
    const fileStore = useFileStore();
    const router = useRouter();

    watchImmediate(fileStore.isDatabaseRegistered, (isRegistered: boolean) => {
      if (!isRegistered) router.push("/");
    });

    return {
      ...fileStore,
    };
  },
});
</script>
<style lang="scss" scoped>
.the-database-picker {
  max-width: 600px;
}
</style>
