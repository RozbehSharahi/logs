<template>
  <div class="database-picker">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div class="mt3">
        <knob label="Pick database" @click="pickDatabase" />
        <knob label="Create database" @click="createDatabase" />
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fileSystem } from "@/file-system/file-system.ts";
import Card from "@/components/Card.vue";
import Knob from "@/components/Knob.vue";

export default defineComponent({
  components: { Knob, Card },
  setup(props, { emit }) {
    const types = [
      {
        description: "Database",
        accept: { "text/plain": [".logs.app"] },
      },
    ];

    return {
      createDatabase: async function () {
        emit("update:database", await fileSystem.createFile({ types }));
      },

      pickDatabase: async function () {
        emit("update:database", await fileSystem.pickFile({ types }));
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
