<template>
  <div class="the-input">
    <label class="label">{{ label }}</label>
    <input
      :type="type"
      ref="inputReference"
      :value="modelValue"
      :required="!required"
      @input="handleInput"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
      required: true,
    },
    autoFocus: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props, { emit }) {
    const inputReference = ref<HTMLInputElement>();

    onMounted(() => {
      const input = inputReference.value;
      if (props.autoFocus && input) input.focus();
    });

    return {
      inputReference,
      handleInput(e: Event) {
        let value: number | string = (e.target as HTMLInputElement).value;
        if (props.type === "number") value = parseInt(value);
        emit("update:modelValue", value);
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
