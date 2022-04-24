<template>
  <div class="the-tag">
    {{ label }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/scss/variables";
.the-tag {
  display: inline;
  padding: 0.2em 1em;
  border: 1px solid $gray-dark;
  opacity: 0.6;
}
</style>
