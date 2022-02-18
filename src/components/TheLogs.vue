<template>
  <div class="logs">
    <the-grid class="mb-30">
      <div class="w-1/2">
        <the-button label="Add" @click="addLog" />
      </div>
      <div class="w-1/2 text-right">
        <the-button
          label="Save"
          v-if="state.isDirty"
          type="primary"
          @click="save"
        />
      </div>
    </the-grid>
    <div class="list">
      <div
        v-for="log in services.database.logs"
        :key="log.getContent()"
        class="log"
        @click="editLog(log)"
      >
        <the-button label="Edit" class="float-right" size="sm" />
        <span>{{ log.getContent() }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onUnmounted, onMounted } from "vue";
import { modalService } from "@/modals/modal-service";
import { database } from "@/database/database";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";
import TheGrid from "@/components/TheGrid.vue";

export default defineComponent({
  components: { TheGrid, TheButton },
  setup() {
    const services = reactive({
      modalService,
      database,
    });

    const state = reactive({
      isDirty: false,
      interval: null as number | null,
    });

    const save = () => {
      services.database.save();
      state.isDirty = false;
    };

    onMounted(() => (state.interval = setInterval(() => save(), 500)));
    onUnmounted(() => state.interval && clearInterval(state.interval));

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
              state.isDirty = true;
              log.setContent(editedLog.getContent());

              services.modalService.pop();
            },
          },
        });
      },
      async addLog() {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          listeners: {
            commit(log: Log) {
              state.isDirty = true;
              services.database.logs.push(log);
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
