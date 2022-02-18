<template>
  <div class="the-database-picker">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div v-if="state.lastDatabase" class="mt-10">
        <knob
          label="Pick last database"
          type="primary"
          @click="pickLastDatabase"
        />
      </div>
      <div class="mt-10">
        <knob label="Pick database" @click="pickDatabase" />
        <knob label="Create database" @click="createDatabase" />
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { fileSystemService } from "@/file-system/service.ts";
import Card from "@/components/TheCard.vue";
import Knob from "@/components/TheButton.vue";
import { FileHandle } from "@/file-system/model/file-handle";

export default defineComponent({
  components: { Knob, Card },
  props: {
    reload: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      lastDatabase: null as FileHandle | null,
    });

    const types = [
      {
        description: "Database",
        accept: { "text/plain": [".logs.app"] },
      },
    ];

    onMounted(async () => {
      state.lastDatabase = await fileSystemService.fromStore("last-database");
    });

    return {
      state,
      createDatabase: async function () {
        let handle = await fileSystemService.createFile({ types });
        await fileSystemService.store("last-database", handle);
        emit("update:database", handle);
      },

      pickDatabase: async function () {
        let handle = await fileSystemService.pickFile({ types });
        await fileSystemService.store("last-database", handle);
        emit("update:database", handle);
      },

      pickLastDatabase: async function () {
        emit("update:database", state.lastDatabase);
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
