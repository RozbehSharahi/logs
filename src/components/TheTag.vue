<template>
  <div class="tag">
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
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/scss/variables";
.tag {
  display: inline-block;
  padding: 0.2em 1em;
  margin-right: 1em;
  border: 1px solid $gray-dark;
  opacity: 0.6;
}
</style>
