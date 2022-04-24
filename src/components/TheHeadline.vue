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
  },
  setup() {
    const tag = computed(() => "h2");
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
  margin-bottom: 1em;
}
</style>
