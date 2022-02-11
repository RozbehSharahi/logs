<template>
  <div class="logs">
    <div>
      <button @click="addLog">Add a new log</button>
    </div>
    Here the list
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { modalService } from "@/modals/modal-service";

export default defineComponent({
  setup() {
    const services = reactive({
      modalService,
    });

    return {
      async addLog() {
        services.modalService.open((await import("./LogForm.vue")).default, {
          text: "Fuck yeah",
        });
      },
    };
  },
});
</script>
