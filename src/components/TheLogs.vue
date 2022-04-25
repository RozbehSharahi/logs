<template>
  <div class="logs">
    <div class="mb-30">
      <the-button
        class="short-cutter-a"
        type="primary"
        label="Add a log (a)"
        @click="addLog"
      />
    </div>
    <the-up-down-navigation
      class="list"
      :selector="'.log .button-edit'"
      :enabled="!services.modalService.getModals().length"
    >
      <div
        v-for="item in logsByMonth.slice().reverse()"
        :key="`${item.year}-${item.month}`"
      >
        <the-headline :label="`${item.year} ${item.monthName}`" />
        <div class="mb-20">
          <div
            v-for="log in item.logs.slice().reverse()"
            :key="log.getIdentifier()"
            class="log"
          >
            <the-grid>
              <div class="w-3/4">
                <div>
                  <span><the-date :date="log.getDate()" /> </span>
                  <strong>{{ log.getContent() }}</strong>
                  <span> / {{ log.getHours() }}h </span>
                </div>
                <div class="text-0.8">
                  <the-tag-list
                    class="inline-block mt-10"
                    :tags="
                      log
                        .getRelations()
                        .getTags()
                        .map((v) => v.getLabel())
                    "
                  />
                </div>
              </div>
              <div class="w-1/4 text-right">
                <the-button label="Delete" size="xs" @click="deleteLog(log)" />
                <the-button
                  label="Edit"
                  class="button-edit"
                  size="xs"
                  type="primary"
                  @click="editLog(log)"
                />
              </div>
            </the-grid>
          </div>
        </div>
      </div>
    </the-up-down-navigation>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { modalService } from "@/modals/modal-service";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";
import TheTagList from "@/components/TheTagList.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheUpDownNavigation from "@/components/TheUpDownNavigation.vue";
import TheDate from "@/components/TheDate.vue";
import { useDatabase } from "@/composables/file-store-database";
import { useLogs } from "@/composables/logs";
import TheHeadline from "@/components/TheHeadline.vue";

export default defineComponent({
  components: {
    TheHeadline,
    TheDate,
    TheUpDownNavigation,
    TheGrid,
    TheTagList,
    TheButton,
  },
  setup() {
    const { database: db } = useDatabase();
    const { logsByMonth } = useLogs();
    const services = reactive({
      modalService,
    });

    const addLog = async () => {
      services.modalService.open({
        component: await import("./TheLogForm.vue"),
        listeners: {
          async commit(log: Log) {
            await db.value.create("log", log);
            services.modalService.pop();
          },
        },
      });
    };

    const editLog = async (log: Log) => {
      services.modalService.open({
        component: await import("./TheLogForm.vue"),
        properties: { log },
        listeners: {
          async commit(editedLog: Log) {
            await db.value.update("log", editedLog);
            services.modalService.pop();
          },
        },
      });
    };

    const deleteLog = async (log: Log) => {
      await db.value.delete("log", log);
    };

    return {
      services,
      logsByMonth,
      addLog,
      editLog,
      deleteLog,
    };
  },
});
</script>
<style scoped lang="scss">
@import "src/assets/scss/variables";
.logs {
  .log {
    padding: 0.5em;
    border-bottom: 1px solid $gray-very-light;

    &:nth-child(odd) {
      background-color: $gray-lightest;
    }
  }
}
</style>
