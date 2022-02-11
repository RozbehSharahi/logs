<template>
  <div class="modals">
    <component
      :is="modal.component"
      v-bind="modal.properties"
      v-for="modal in services.modalService.getModals()"
      v-on="modal.listeners"
      :key="modal"
      class="modal"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { modalService } from "@/modals/modal-service";
export default defineComponent({
  setup() {
    const services = reactive({ modalService });

    return {
      services,
    };
  },
});
</script>
