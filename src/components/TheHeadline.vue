<template>
  <component :is="tag" :class="tag">{{ label }}</component>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    const tag = computed(() => `h${props.level}`);
    return {
      tag,
    };
  },
});
</script>
<style lang="scss" scoped>
.h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 2em;
}
.h3 {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 2em;
}
</style>
