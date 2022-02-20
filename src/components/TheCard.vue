<template>
  <div class="the-card">
    <div class="the-card-title" v-if="title">{{ title }}</div>
    <div class="the-card-content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped>
.the-card {
  padding: 0;
  border: 1px solid black;
  border-radius: 1em;
  overflow: hidden;

  &-title {
    padding: 0.7em 1em;
    font-size: 1.2em;
    background: black;
    color: #fff;
  }

  &-content {
    padding: 1em;
  }
}
</style>
