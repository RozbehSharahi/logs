<template>
  <button class="the-button">
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

  &:hover {
    background: #000;
    color: #fff;
  }
}
</style>
