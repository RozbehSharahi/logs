<template>
  <the-card title="Log">
    <the-form class="bg-white" @submit.prevent="methods.commit">
      <the-input
        :auto-focus="true"
        label="Content"
        v-model="state.draft.content"
      />
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
import { Log } from "@/model/log";
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import TheCard from "@/components/TheCard.vue";

export default defineComponent({
  components: { TheCard, TheButton, TheInput, TheForm },
  props: {
    log: {
      type: Log,
      required: false,
      default: new Log({}),
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      draft: {
        identifier: props.log.getIdentifier(),
        content: props.log.getContent(),
      },
    });

    const methods = {
      commit() {
        emit("commit", new Log(state.draft));
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
