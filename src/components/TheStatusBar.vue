<template>
  <div class="the-status-bar" :class="{ dirty: isDirty }">
    <the-grid>
      <div class="w-3/4">
        <div class="mt-4">
          <span v-if="!isDirty"> ✓ All todos saved </span>
          <span v-else> Please save your changes </span>
        </div>
      </div>
      <div class="w-1/4 text-right">
        <the-button
          label="Logout (Escape)"
          size="sm"
          @click="unregisterDatabase()"
        />
        <the-button
          v-if="isDirty"
          size="sm"
          type="danger"
          label="Save (s)"
          @click="saveAll"
        />
      </div>
    </the-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheButton from "@/components/TheButton.vue";
import TheGrid from "@/components/TheGrid.vue";
import { useFileStore } from "@/composables/file-store";
import { useDatabase } from "@/composables/database";

export default defineComponent({
  components: { TheGrid, TheButton },
  setup() {
    return {
      ...useFileStore(),
      ...useDatabase(useFileStore().database.value),
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
