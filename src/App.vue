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
import Modals from "@/modals/component/Modals.vue";
export default {
  components: { Modals },
};
</script>
