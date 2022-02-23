<template>
  <div class="the-tag-picker">
    <a
      v-for="tag in tags"
      class="tag"
      :key="tag.getIdentifier()"
      @click.prevent="methods.toggleTag(tag)"
      :class="{ active: methods.isActive(tag) }"
    >
      {{ tag.getLabel() }}
    </a>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import { Tag } from "@/model/tag";
export default defineComponent({
  props: {
    modelValue: {
      type: Array,
      required: false,
    },
  },
  setup(props, { emit }) {
    const services = reactive({
      database: fileStore.getDatabase(),
    });

    const methods = {
      isActive(tag: Tag) {
        return (props.modelValue || []).includes(tag.getLabel());
      },
      toggleTag(tag: Tag) {
        if (!props.modelValue) return;

        emit(
          "update:modelValue",
          methods.isActive(tag)
            ? props.modelValue.filter((v) => v !== tag.getLabel())
            : [...props.modelValue, tag.getLabel()]
        );
      },
    };

    return {
      services,
      methods,
      tags: computed(() => services.database.all("tag") as Tag[]),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/scss/variables";
.the-tag-picker {
  margin-bottom: 2em;

  .tag {
    display: inline-block;
    background: $gray-very-light;
    padding: 0.2em 1em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;

    &:hover,
    &.active {
      background: $primary;
      color: #fff;
    }
  }
}
</style>
