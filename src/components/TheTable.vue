<template>
  <table class="table">
    <slot />
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.table {
  width: 100%;

  ::v-deep(th),
  ::v-deep(td) {
    text-align: left;
    padding: 0.4em 1em 0.4em 0;
  }

  ::v-deep(tr) {
    border-bottom: 1px solid #eee;
  }
}
</style>
