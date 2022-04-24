<template>
  <div v-if="isDatabaseLoaded">
    <the-status-bar class="mb-30" />
    <the-grid :spacing-x="50">
      <div class="w-1/4">
        <the-navigation />
      </div>
      <div class="w-3/4">
        <the-statistics />
      </div>
    </the-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheStatusBar from "@/components/TheStatusBar.vue";
import TheGrid from "@/components/TheGrid.vue";
import { useRouter } from "vue-router";
import { watchImmediate } from "@/utils/vue-utils";
import TheNavigation from "@/components/TheNavigation.vue";
import TheStatistics from "@/components/TheStatistics.vue";
import { useDatabase } from "@/composables/file-store-database";

export default defineComponent({
  components: { TheStatistics, TheNavigation, TheGrid, TheStatusBar },

  setup() {
    const { isDatabaseLoaded } = useDatabase();
    const router = useRouter();

    watchImmediate(isDatabaseLoaded, (v: boolean) => {
      if (!v) router.push("/");
    });

    return {
      isDatabaseLoaded,
    };
  },
});
</script>
