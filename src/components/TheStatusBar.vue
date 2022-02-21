<template>
  <div class="the-status-bar" :class="{ dirty: services.database.isDirty() }">
    <the-button
      label="Logout (Escape)"
      size="sm"
      class="float-right"
      @click="services.fileStore.unregisterDatabase()"
    />
    <the-button
      v-if="services.database.isDirty()"
      class="float-right"
      size="sm"
      type="danger"
      label="Save (s)"
      @click="save"
    />
    <span>✓ All todos saved</span>
    <span v-if="services.database.isDirty()"> Please save your changes </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: { TheButton },
  setup() {
    const services = reactive({
      fileStore,
      database: fileStore.getDatabase(),
    });
    return {
      services,
      async save() {
        await services.database.saveAll();
      },
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/variables";
.the-status-bar {
  background: $gray-lightest;
  border-bottom: 4px solid $gray-very-light;
  padding: 1em;

  &.dirty {
    border-bottom-color: $danger;
  }
}
</style>
