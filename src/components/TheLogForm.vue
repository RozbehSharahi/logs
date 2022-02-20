<template>
  <the-form class="bg-white" @submit.prevent="commit">
    <the-input
      :auto-focus="true"
      label="Content"
      v-model="state.draft.content"
    />
    <the-button label="Commit" type="primary"></the-button>
    <the-button label="Cancel" @click.prevent="$emit('close')"></the-button>
  </the-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import TheForm from "@/components/TheForm.vue";
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";

export default defineComponent({
  components: { TheButton, TheInput, TheForm },
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
    return {
      state,
      commit() {
        emit("commit", new Log(state.draft));
      },
    };
  },
});
</script>
