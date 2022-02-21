<template>
  <div class="the-card">
    <div class="the-card-title" v-if="title">
      <h2>{{ title }}</h2>
    </div>
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
@import "./../assets/scss/variables";
.the-card {
  padding: 0;
  border: 1px solid $gray-lightest;
  overflow: hidden;
  background: #fff;

  &-title {
    padding: 0.7em 1em;
    border-bottom: 1px solid $gray;
    background: #f9f9f9;

    h2 {
      font-size: 1.2em;
    }
  }

  &-content {
    padding: 2em 1em;
  }
}
</style>
