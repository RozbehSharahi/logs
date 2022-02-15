<template>
  <div class="modals" v-if="services.modalService.getModals().length">
    <div class="modals-content">
      <component
        :is="modal.component"
        v-bind="modal.properties"
        v-for="modal in services.modalService.getModals()"
        v-on="modal.listeners"
        :key="modal"
        class="modal"
      />
    </div>
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
<style lang="scss" scoped>
.modals {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparentize(#fff, 0.4);

  &-content {
    margin-top: 10em;
  }

  .modal {
    border: 1px solid #000;
    box-shadow: 5px 10px #888888;
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
  }
}
</style>
