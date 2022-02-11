<template>
  <div class="knob">
    {{ label }}
  </div>
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
.knob {
  padding: 10px;
  border: 1px solid black;
}
</style>
