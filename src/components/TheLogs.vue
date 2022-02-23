<template>
  <div class="logs">
    <div class="mb-10">
      <the-button
        type="primary"
        label="Add a log (a)"
        @click="methods.addLog"
      />
    </div>
    <div class="list">
      <div
        v-for="log in logs"
        :key="log.getIdentifier()"
        class="log"
        :class="{
          active: state.activeLog?.getIdentifier() === log.getIdentifier(),
        }"
      >
        <the-button
          label="Delete"
          class="float-right"
          size="sm"
          @click="methods.deleteLog(log)"
        />
        <the-button
          label="Edit"
          class="float-right"
          size="sm"
          @click="methods.editLog(log)"
        />
        <span>{{ log.getHours() }}h </span>
        <strong>{{ log.getContent() }}</strong>
        <the-tag-list
          class="inline-block ml-20 mt-10 text-0.6"
          style="position: relative; top: -0.5em"
          :tags="log.getTags()"
        />
      </div>
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
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import TheTagList from "@/components/TheTagList.vue";

export default defineComponent({
  components: { TheTagList, TheButton },
  setup() {
    const state = reactive({
      activeLog: null as Log | null,
    });

    const services = reactive({
      modalService,
      fileStore: fileStore,
      database: fileStore.getDatabase(),
    });

    const methods = {
      save: async () => {
        await services.database.saveAll();
      },
      addLog: async () => {
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
      editLog: async (log: Log) => {
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
      deleteLog: async (log: Log) => {
        await services.database.delete("log", log);
      },
      editActiveLog() {
        const activeLog = state.activeLog as Log | null;
        if (activeLog) {
          methods.editLog(activeLog);
        }
      },
      deleteActiveLog() {
        const activeLog = state.activeLog as Log | null;
        methods.selectNextItem();
        if (activeLog) methods.deleteLog(activeLog);
      },
      selectNextItem(reverse = false) {
        const logs = (
          !reverse
            ? services.database.all("log")
            : services.database.all("log").reverse()
        ) as Log[];
        const logsCount = logs.length;
        if (!logs.length) return;

        const activeLog = state.activeLog;

        if (!activeLog) {
          state.activeLog = logs[0];
          return;
        }

        const index = logs.findIndex(
          (possibleLog) =>
            possibleLog.getIdentifier() === activeLog.getIdentifier()
        );

        if (logsCount - 1 === index) {
          state.activeLog = logs[0];
          return;
        }

        return (state.activeLog = logs[index + 1]);
      },
      selectPreviousItem() {
        return methods.selectNextItem(true);
      },
    };

    onMounted(() => {
      shortPacker.push([
        new ShortCut({
          key: "s",
          action: () => methods.save(),
        }),
        new ShortCut({
          key: "a",
          action: () => methods.addLog(),
        }),
        new ShortCut({
          key: "Escape",
          action: () => services.fileStore.unregisterDatabase(),
        }),
        new ShortCut({
          key: "ArrowDown",
          action: () => methods.selectNextItem(),
        }),
        new ShortCut({
          key: "ArrowUp",
          action: () => methods.selectPreviousItem(),
        }),
        new ShortCut({
          key: "Delete",
          action: () => methods.deleteActiveLog(),
        }),
        new ShortCut({
          key: "e",
          action: () => methods.editActiveLog(),
        }),
        new ShortCut({
          key: "Enter",
          action: () => methods.editActiveLog(),
        }),
      ]);
    });

    onUnmounted(() => {
      shortPacker.pop();
    });

    return {
      state,
      services,
      methods,
      logs: computed((): Log[] => services.database.all("log")),
    };
  },
});
</script>
<style scoped lang="scss">
@import "src/assets/scss/variables";
.logs {
  .log {
    padding: 1em;
    border-bottom: 1px solid $gray-very-light;

    &.active {
      background-color: transparentize($primary, 0.9);
    }
  }
}
</style>
