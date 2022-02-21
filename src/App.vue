<template>
  <div class="container mt-30">
    <router-view />
  </div>
  <modals />
</template>

<script>
import Modals from "@/modals/component/Modals.vue";
import { Log } from "@/model/log";
import { fileStore } from "@rozbehsharahi/file-store";

export default {
  components: { Modals },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      fileStore,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    fileStore.registerSerializer("log", Log.getNormalizer());
  },
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
