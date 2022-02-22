<template>
  <the-card title="Tag">
    <the-form class="bg-white" @submit.prevent="methods.commit">
      <the-input :auto-focus="true" label="Label" v-model="state.draft.label" />
      <the-button label="Commit" type="primary"></the-button>
      <the-button label="Cancel" @click.prevent="$emit('close')"></the-button>
    </the-form>
  </the-card>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import TheForm from "@/components/TheForm.vue";
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import TheCard from "@/components/TheCard.vue";
import { Tag } from "@/model/tag";

export default defineComponent({
  components: { TheCard, TheButton, TheInput, TheForm },
  props: {
    tag: {
      type: Tag,
      required: true,
      default: new Tag({ label: "" }),
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      draft: {
        identifier: props.tag.getIdentifier(),
        label: props.tag.getLabel(),
      },
    });

    const methods = {
      commit() {
        emit("commit", new Tag(state.draft));
      },
    };

    onMounted(() => {
      shortPacker.push([
        new ShortCut({
          label: "Commit",
          key: "Escape",
          action: () => emit("close"),
        }),
      ]);
    });

    onUnmounted(() => {
      shortPacker.pop();
    });

    return {
      state,
      methods,
    };
  },
});
</script>
