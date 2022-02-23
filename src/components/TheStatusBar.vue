<template>
  <div class="the-status-bar" :class="{ dirty: services.database.isDirty() }">
    <the-grid>
      <div class="w-3/4">
        <div class="mt-4">
          <span v-if="!services.database.isDirty()"> ✓ All todos saved </span>
          <span v-else> Please save your changes </span>
        </div>
      </div>
      <div class="w-1/4 text-right">
        <the-button
          label="Logout (Escape)"
          size="sm"
          @click="services.fileStore.unregisterDatabase()"
        />
        <the-button
          v-if="services.database.isDirty()"
          size="sm"
          type="danger"
          label="Save (s)"
          @click="save"
        />
      </div>
    </the-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { fileStore } from "@rozbehsharahi/file-store";
import TheButton from "@/components/TheButton.vue";
import TheGrid from "@/components/TheGrid.vue";

export default defineComponent({
  components: { TheGrid, TheButton },
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
