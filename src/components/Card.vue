<template>
  <div class="card">
    <div class="card-title" v-if="title">{{ title }}</div>
    <div class="car-content">
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
.card {
  padding: 20px;
  border: 1px solid black;

  .card-title {
    font-size: 1.5em;
  }
}
</style>
