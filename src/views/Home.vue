<template>
  <div>
    <the-database-picker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { watchImmediate } from "@/utils/vue-utils";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";
import { useDatabase } from "@/composables/file-store-database";

export default defineComponent({
  components: { TheDatabasePicker },

  setup() {
    const { isDatabaseLoaded } = useDatabase();
    const router = useRouter();

    watchImmediate(isDatabaseLoaded, (v: boolean) => {
      if (v) router.push("logs");
    });

    return {};
  },
});
</script>
<style lang="scss" scoped>
.the-database-picker {
  max-width: 600px;
}
</style>
