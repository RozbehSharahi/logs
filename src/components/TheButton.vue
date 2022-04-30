<template>
  <button ref="buttonReference" class="the-button" :class="`${type} ${size}`">
    {{ label }}
  </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "",
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonReference = ref<HTMLButtonElement | null>(null);

    onMounted(() => {
      const button = buttonReference.value;

      if (props.autoFocus && button) {
        button.focus();
      }
    });

    return {
      buttonReference,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/variables";
.the-button {
  padding: 0.5em 1em;
  border-bottom: 2px solid $gray-dark;
  margin-right: 1em;
  background: #fff;
  transition: background-color 0.5s;

  &.primary {
    background: lighten($primary, 50);
    border-bottom-color: $primary;

    &:hover,
    &:active,
    &:focus {
      background: $primary;
      color: #fff;
    }
  }

  &.danger {
    background: lighten($danger, 60);
    border-bottom-color: $danger;

    &:hover,
    &:active,
    &:focus {
      background: $danger;
      color: #fff;
      outline: 0;
    }
  }

  &:hover,
  &:active,
  &:focus {
    background: $gray;
    outline: 0;
  }

  &.sm {
    font-size: 0.8em;
    border-width: 1px;
  }

  &.xs {
    font-size: 0.6em;
    border-width: 0;
  }
}
</style>
