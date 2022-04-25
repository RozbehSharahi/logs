<template>
  <div v-if="isVisible">
    <the-status-bar class="mb-30" />
    <the-grid :spacing-x="50">
      <div class="w-1/4">
        <the-navigation />
      </div>
      <div class="w-3/4">
        <slot />
      </div>
    </the-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import TheStatusBar from "@/components/TheStatusBar.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import { useDatabase } from "@/composables/file-store-database";
import { useRouter } from "vue-router";
import { watchImmediate } from "@/utils/vue-utils";
export default defineComponent({
  components: { TheNavigation, TheGrid, TheStatusBar },
  props: {
    checkDatabaseLoaded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isVisible = ref(true);

    if (props.checkDatabaseLoaded) {
      isVisible.value = false;
      const { isDatabaseLoaded } = useDatabase();
      const router = useRouter();

      watchImmediate(isDatabaseLoaded, (v: boolean) => {
        if (!v) return router.push("/");
        isVisible.value = true;
      });
    }

    return {
      isVisible,
    };
  },
});
</script>
<style lang="scss" scoped></style>
