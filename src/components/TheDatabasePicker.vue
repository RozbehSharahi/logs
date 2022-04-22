<template>
  <div class="the-database-picker" v-if="isReady">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div class="mt-10">
        <the-button
          v-if="isLastDatabaseStored"
          label="Continue session"
          @click="pickDatabaseFromSession"
          type="primary"
          :auto-focus="true"
        />
        <the-button
          label="Pick database"
          @click="pickDatabase"
          :auto-focus="!isLastDatabaseStored"
          type="primary"
        />
        <the-button label="Create database" @click="createDatabase" />
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Card from "@/components/TheCard.vue";
import TheButton from "@/components/TheButton.vue";
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import { findNextTabElement, findPreviousTabElement } from "@/utils/utils";
import { useFileStore } from "@/composables/file-store";

export default defineComponent({
  components: { TheButton, Card },
  props: {
    reload: {
      type: Boolean,
    },
  },
  setup() {
    const fileStore = useFileStore();

    onMounted(async () => {
      shortPacker.push([
        new ShortCut({
          key: "ArrowLeft",
          action: () => findPreviousTabElement().focus(),
        }),
        new ShortCut({
          key: "ArrowRight",
          action: () => findNextTabElement().focus(),
        }),
      ]);
    });

    onUnmounted(() => {
      shortPacker.pop();
    });

    return {
      ...fileStore,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
