<template>
  <div class="logs">
    <div>
      <the-button label="Add" @click="addLog" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { modalService } from "@/modals/modal-service";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: { TheButton },
  setup() {
    const services = reactive({
      modalService,
    });

    return {
      async addLog() {
        console.log("addlog");
        services.modalService.open(
          (await import("./TheLogForm.vue")).default,
          {},
          {
            submit() {
              alert("yeah2");
            },
          }
        );
      },
    };
  },
});
</script>
