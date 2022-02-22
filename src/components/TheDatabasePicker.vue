<template>
  <div class="the-database-picker" v-if="!state.loading">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div class="mt-10">
        <the-button
          v-if="state.isDatabaseStored"
          label="Continue session"
          @click="pickLastDatabase"
          type="primary"
          :auto-focus="true"
        />
        <the-button
          label="Pick database"
          @click="pickDatabase"
          :auto-focus="!state.isDatabaseStored"
          type="primary"
        />
        <the-button label="Create database" @click="createDatabase" />
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import Card from "@/components/TheCard.vue";
import TheButton from "@/components/TheButton.vue";
import { fileStore } from "@rozbehsharahi/file-store/file-store";
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import { findNextTabElement, findPreviousTabElement } from "@/utils/utils";

export default defineComponent({
  components: { TheButton, Card },
  props: {
    reload: {
      type: Boolean,
    },
  },
  setup() {
    const services = reactive({
      fileStore,
    });

    const state = reactive({
      loading: true,
      isDatabaseStored: false,
    });

    onMounted(async () => {
      state.isDatabaseStored = await fileStore.isDatabaseStored();
      state.loading = false;

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
      state,

      createDatabase: async function () {
        await services.fileStore.createAndRegisterDatabase();
      },

      pickDatabase: async function () {
        await services.fileStore.pickAndRegisterDatabase();
      },

      pickLastDatabase: async function () {
        await services.fileStore.pickFromSessionAndRegisterDatabase();
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
