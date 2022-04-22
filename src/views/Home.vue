<template>
  <div>
    <the-database-picker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useFileStore } from "@/composables/file-store";
import { watchImmediate } from "@/utils/vue-utils";
import TheDatabasePicker from "@/components/TheDatabasePicker.vue";

export default defineComponent({
  components: { TheDatabasePicker },

  setup() {
    const { isDatabaseRegistered } = useFileStore();
    const router = useRouter();

    watchImmediate(isDatabaseRegistered, (v: boolean) => {
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
