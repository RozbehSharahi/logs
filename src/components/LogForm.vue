<template>
  <div class="log-form">
    <button @click="$emit('action')">Do action</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
