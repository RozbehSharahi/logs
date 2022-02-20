<template>
  <div class="logs">
    <div class="mb-10">
      <the-button label="Add" @click="addLog" />
    </div>
    <div class="list">
      <the-grid :key="logs.length">
        <div v-for="log in logs" :key="log.getIdentifier()" class="log w-1/3">
          <the-card :title="log.getIdentifier().toString()">
            <the-button
              label="Delete"
              class="float-right"
              size="sm"
              @click="deleteLog(log)"
            />
            <the-button
              label="Edit"
              class="float-right"
              size="sm"
              @click="editLog(log)"
            />
            <span>{{ log.getIdentifier() }} | </span>
            <strong>{{ log.getContent() }}</strong>
          </the-card>
        </div>
      </the-grid>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
} from "vue";
import { modalService } from "@/modals/modal-service";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";
import { fileStore } from "@rozbehsharahi/file-store";
import { saveShortcut } from "@rozbehsharahi/save-shortcut";
import TheCard from "@/components/TheCard.vue";
import TheGrid from "@/components/TheGrid.vue";

export default defineComponent({
  components: { TheGrid, TheCard, TheButton },
  setup() {
    const services = reactive({
      modalService,
      database: fileStore.getDatabase(),
    });

    const save = () => services.database.saveAll();

    onMounted(() => saveShortcut.register("the-logs", () => save()));
    onUnmounted(() => saveShortcut.unregister("the-logs"));

    return {
      services,
      logs: computed((): Log[] => services.database.all("log")),
      save,
      async addLog() {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          listeners: {
            async commit(log: Log) {
              await services.database.create("log", log);
              services.modalService.pop();
            },
          },
        });
      },
      async editLog(log: Log) {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          properties: { log },
          listeners: {
            async commit(editedLog: Log) {
              await services.database.update("log", editedLog);
              services.modalService.pop();
            },
          },
        });
      },
      async deleteLog(log: Log) {
        await services.database.delete("log", log);
      },
    };
  },
});
</script>
<style scoped lang="scss">
.logs {
  .the-card {
    height: 100%;
  }
}
</style>
