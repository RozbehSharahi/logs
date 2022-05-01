<template>
  <div class="the-status-bar" :class="{ dirty: database.isDirty() }">
    <the-grid>
      <div class="w-3/4">
        <div class="mt-4">
          <span v-if="!database.isDirty()" class="text-primary">
            ✓ All todos saved
          </span>
          <span v-else> Please save your changes </span>
        </div>
      </div>
      <div class="w-1/4 text-right">
        <the-button
          class="short-cutter-escape"
          label="Logout (Escape)"
          size="sm"
          @click="unregisterDatabase()"
        />
        <the-button
          class="short-cutter-s"
          v-if="database.isDirty()"
          size="sm"
          type="danger"
          label="Save (s)"
          @click="database.saveAll()"
        />
      </div>
    </the-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheButton from "@/components/TheButton.vue";
import TheGrid from "@/components/TheGrid.vue";
import { useDatabase } from "@/composables/file-store-database";

export default defineComponent({
  components: { TheGrid, TheButton },
  setup() {
    return {
      ...useDatabase(),
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
