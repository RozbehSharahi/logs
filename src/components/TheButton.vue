<template>
  <button class="the-button" :class="`${type} ${size}`">
    {{ label }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "",
    },
  },
});
</script>
<style lang="scss" scoped>
.the-button {
  padding: 0.5em 1em;
  border: 2px solid black;
  margin-right: 1em;
  border-radius: 5px;
  background: transparentize(#000, 0.98);

  &.primary {
    background: green;
    color: #fff;
    border: 2px solid darken(green, 5);
  }

  &:hover {
    background: #000;
    color: #fff;
  }

  &.sm {
    font-size: 0.6em;
  }
}
</style>
