<template>
  <div class="the-database-picker" v-if="isReady">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div class="mt-10">
        <the-button
          v-if="isStoredInSession"
          label="Continue session"
          @click="pickDatabaseFromSession"
          type="primary"
          :auto-focus="true"
        />
        <the-button
          label="Pick database"
          @click="pickDatabase"
          :auto-focus="!isStoredInSession"
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
import { useDatabase } from "@/composables/file-store-database";

export default defineComponent({
  components: { TheButton, Card },
  props: {
    reload: {
      type: Boolean,
    },
  },
  setup() {
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
      ...useDatabase(),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
