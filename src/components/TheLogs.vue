<template>
  <div class="logs">
    <div class="mb-10">
      <the-button label="Add" @click="addLog" />
    </div>
    <div class="list">
      <div
        v-for="log in services.database.all('log')"
        :key="log.identifier"
        class="log"
        @click="editLog(log)"
      >
        <the-button label="Edit" class="float-right" size="sm" />
        <span>{{ log.content }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import { modalService } from "@/modals/modal-service";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";
import { fileStore } from "@rozbehsharahi/file-store";
import { saveShortcut } from "@rozbehsharahi/save-shortcut";

export default defineComponent({
  components: { TheButton },
  setup() {
    const services = reactive({
      modalService,
      database: fileStore.getDatabase(),
    });

    const state = reactive({
      interval: null as number | null,
    });

    const save = () => services.database.saveAll();

    onMounted(() => saveShortcut.register("the-logs", () => save()));
    onUnmounted(() => saveShortcut.unregister("the-logs"));

    return {
      state,
      services,
      save,
      async editLog(log: Log) {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          properties: {
            log: log,
          },
          listeners: {
            commit(editedLog: Log) {
              console.log(editedLog);

              services.modalService.pop();
            },
          },
        });
      },
      async addLog() {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          listeners: {
            async commit(log: Log) {
              await services.database.create("log", {
                content: log.getContent(),
              });
              services.modalService.pop();
            },
          },
        });
      },
    };
  },
});
</script>
<style scoped lang="scss">
.logs {
  .log {
    padding: 1em;
    border: 1px solid black;
    margin-bottom: 1em;
  }
}
</style>
