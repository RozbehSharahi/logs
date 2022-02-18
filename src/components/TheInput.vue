<template>
  <div class="the-input">
    <label class="label">{{ label }}</label>
    <input :value="modelValue" type="text" @input="handleInput" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    return {
      handleInput(e: Event) {
        emit("update:modelValue", (e.target as HTMLInputElement).value);
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.the-input {
  position: relative;
  margin-bottom: 2em;

  .label {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    color: #fff;
    font-size: 0.8em;
    padding: 0.3em 1em;
    text-transform: uppercase;
  }

  input {
    border: 1px solid #999;
    padding: 2em 1em 1em 1em;
    display: block;
    width: 100%;
  }
}
</style>
