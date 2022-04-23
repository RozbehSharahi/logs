<template>
  <div class="logs">
    <div class="mb-30">
      <the-button
        type="primary"
        label="Add a log (a)"
        @click="methods.addLog"
      />
    </div>
    <the-up-down-navigation
      class="list"
      :selector="'.log .button-edit'"
      :enabled="!services.modalService.getModals().length"
    >
      <div v-for="log in logs" :key="log.getIdentifier()" class="log">
        <the-grid>
          <div class="w-3/4">
            <div>
              <span><the-date :date="log.getDate()" /> / </span>
              <strong>{{ log.getContent() }}</strong>
              <span> / {{ log.getHours() }}h </span>
            </div>
            <div class="text-0.8">
              <the-tag-list
                class="inline-block mt-10"
                :tags="methods.getTagsByIds(log.getTags())"
              />
            </div>
          </div>
          <div class="w-1/4 text-right">
            <the-button
              label="Delete"
              size="sm"
              @click="methods.deleteLog(log)"
            />
            <the-button
              label="Edit"
              class="button-edit"
              size="sm"
              type="primary"
              @click="methods.editLog(log)"
            />
          </div>
        </the-grid>
      </div>
    </the-up-down-navigation>
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
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import TheTagList from "@/components/TheTagList.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheUpDownNavigation from "@/components/TheUpDownNavigation.vue";
import TheDate from "@/components/TheDate.vue";
import { useFileStore } from "@/composables/file-store";
import { useDatabase } from "@/composables/database";
import { Tag } from "@/model/tag";

export default defineComponent({
  components: { TheDate, TheUpDownNavigation, TheGrid, TheTagList, TheButton },
  setup() {
    const { database, unregisterDatabase } = useFileStore();
    const { saveAll, create, update, all } = useDatabase(database.value);

    const services = reactive({
      modalService,
    });

    const methods = {
      save: async () => {
        await saveAll();
      },
      addLog: async () => {
        services.modalService.open({
          component: await import("./TheLogForm.vue"),
          listeners: {
            async commit(log: Log) {
              await create("log", log);
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
              await update("log", editedLog);
              services.modalService.pop();
            },
          },
        });
      },
      deleteLog: async (log: Log) => {
        await database.value.delete("log", log);
      },
      getTagsByIds(ids: number[]) {
        return ids.map((id) => {
          const tag: Tag | null = database.value.get("tag", id);
          return tag ? tag.getLabel() : null;
        });
      },
    };

    onMounted(() => {
      shortPacker.push([
        new ShortCut({ key: "s", action: () => methods.save() }),
        new ShortCut({ key: "a", action: () => methods.addLog() }),
        new ShortCut({ key: "Escape", action: () => unregisterDatabase() }),
      ]);
    });

    onUnmounted(() => {
      shortPacker.pop();
    });

    return {
      services,
      methods,
      logs: computed((): Log[] => all("log")),
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

    &:nth-child(odd) {
      background-color: $gray-lightest;
    }
  }
}
</style>
