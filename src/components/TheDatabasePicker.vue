<template>
  <div class="the-database-picker">
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
import { defineComponent, onMounted } from "vue";
import { service } from "@/file-system/service.ts";
import Card from "@/components/TheCard.vue";
import Knob from "@/components/TheButton.vue";

export default defineComponent({
  components: { Knob, Card },
  props: {
    reload: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const types = [
      {
        description: "Database",
        accept: { "text/plain": [".logs.app"] },
      },
    ];

    onMounted(async () => {
      const lastDatabase = await service.fromStore("last-database");
      emit("update:database", lastDatabase);
    });

    return {
      createDatabase: async function () {
        let handle = await service.createFile({ types });
        await service.store("last-database", handle);
        emit("update:database", handle);
      },

      pickDatabase: async function () {
        let handle = await service.pickFile({ types });
        await service.store("last-database", handle);
        emit("update:database", handle);
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
