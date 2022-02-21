<template>
  <div class="the-database-picker">
    <card title="Choose">
      <p>You have 2 options: Pick an existing database or create a new one.</p>
      <div class="mt-10">
        <the-button
          :autoFocus="true"
          label="Pick database"
          @click="pickDatabase"
          type="primary"
        />
        <the-button label="Create database" @click="createDatabase" />
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Card from "@/components/TheCard.vue";
import TheButton from "@/components/TheButton.vue";
import { fileStore } from "@rozbehsharahi/file-store/file-store";

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

    return {
      createDatabase: async function () {
        await services.fileStore.createAndRegisterDatabase();
      },

      pickDatabase: async function () {
        await services.fileStore.pickAndRegisterDatabase();
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
