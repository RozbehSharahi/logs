<template>
  <the-form @submit.prevent="submit">
    <the-input label="Content" />
    <the-button label="Save"></the-button>
  </the-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import TheForm from "@/components/TheForm.vue";
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: { TheButton, TheInput, TheForm },
  setup(props, { emit }) {
    const state = reactive({
      draft: {
        content: "",
      },
    });
    return {
      state,
      submit() {
        emit("submit", {
          content: state.draft.content,
        });
      },
    };
  },
});
</script>
