<template>
  <div class="container mt-30">
    <router-view />
  </div>
  <modals />
</template>

<style lang="scss">
@import "./assets/style";
</style>
<script>
/* eslint-disable */
import Modals from "@/modals/component/Modals.vue";
import { Log } from "@/model/log";
import { fileStore } from "@rozbehsharahi/file-store";
export default {
  components: { Modals },
  data() {
    return {
      fileStore,
    };
  },
  mounted() {
    fileStore.registerSerializer("log", Log.getNormalizer());
  },
};
</script>
