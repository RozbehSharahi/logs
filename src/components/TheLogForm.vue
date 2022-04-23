<template>
  <the-card title="Log">
    <the-form class="bg-white" @submit.prevent="methods.commit">
      <the-input
        :auto-focus="true"
        :required="true"
        label="Content"
        v-model="state.draft.content"
      />
      <the-input type="number" label="Hours" v-model="state.draft.hours" />
      <the-input label="date" type="date" v-model="state.draft.date" />
      <the-tag-picker label="tags" v-model="state.draft.tags" />
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
import TheTagPicker from "@/components/TheTagPicker.vue";

export default defineComponent({
  components: { TheTagPicker, TheCard, TheButton, TheInput, TheForm },
  props: {
    log: {
      type: Log,
      required: false,
      default: new Log(),
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      draft: {
        identifier: (props.log as Log).getIdentifier(),
        content: (props.log as Log).getContent(),
        hours: (props.log as Log).getHours(),
        date: (props.log as Log).getDateString(),
        tags: (props.log as Log).getTags(),
      },
    });

    const methods = {
      commit() {
        const data = Object.assign({}, state.draft, {
          date: new Date(state.draft.date),
        });
        emit("commit", new Log(data));
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
