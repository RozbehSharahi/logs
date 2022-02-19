<template>
  <div class="the-status-bar" :class="{ dirty: services.database.isDirty() }">
    <the-button
      v-if="services.database.isDirty()"
      class="float-right"
      size="sm"
      type="danger"
      label="Save"
      @click="save"
    />
    <span>Todos</span>
    <span v-if="services.database.isDirty()">
      (Please save your changes: <strong>ctrl+s</strong>)
    </span>
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
.the-status-bar {
  background: green;
  color: #fff;
  padding: 1em;

  &.dirty {
    background: red;
  }
}
</style>
