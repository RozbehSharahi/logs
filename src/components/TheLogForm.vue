<template>
  <the-form class="bg-white" @submit.prevent="commit">
    <the-input label="Content" v-model="state.draft.content" />
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
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      draft: {
        content: props.log?.getContent() || "",
      },
    });
    return {
      state,
      commit() {
        emit(
          "commit",
          new Log({
            content: state.draft.content,
          })
        );
      },
    };
  },
});
</script>
