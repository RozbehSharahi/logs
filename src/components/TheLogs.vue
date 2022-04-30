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
        v-for="month in logsByMonthReversed"
        :key="`${month.item.getFullYear()}-${month.item.getMonth() + 1}`"
      >
        <the-headline :label="`${month.item.getMonthAndYear()}`" :level="3" />
        <div class="mb-20">
          <the-grid
            v-for="day in getLogsGroupedByDay(month.logs)"
            :key="day.item.getTime()"
            class="day"
          >
            <div class="w-1/12 text-primary">
              <em>{{ day.item.getDayAndMonth() }}</em>
            </div>
            <div class="w-11/12">
              <div
                v-for="log in day.logs"
                :key="log.getIdentifier()"
                class="log"
              >
                <the-grid>
                  <div class="w-4/5">
                    <div class="t-o-e">
                      <span>{{ log.getHours() }}h • </span>
                      <span>{{ log.getContent() }}</span>
                    </div>
                    <div class="text-0.8">
                      <the-tag-list
                        v-if="false"
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
                  <div class="w-1/5 text-right">
                    <the-button
                      @click="deleteLog(log)"
                      label="Delete"
                      size="xs"
                    />
                    <the-button
                      size="xs"
                      class="button-edit"
                      type="primary"
                      @click="editLog(log)"
                      label="Edit"
                    />
                  </div>
                </the-grid>
              </div>
            </div>
          </the-grid>
        </div>
      </div>
    </the-up-down-navigation>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { modalService } from "@/modals/modal-service";
import TheButton from "@/components/TheButton.vue";
import { Log } from "@/model/log";
import TheTagList from "@/components/TheTagList.vue";
import TheGrid from "@/components/TheGrid.vue";
import TheUpDownNavigation from "@/components/TheUpDownNavigation.vue";
import { useDatabase } from "@/composables/file-store-database";
import { LogsByMonth, useLogs } from "@/composables/logs";
import TheHeadline from "@/components/TheHeadline.vue";

export default defineComponent({
  components: {
    TheHeadline,
    TheUpDownNavigation,
    TheGrid,
    TheTagList,
    TheButton,
  },
  setup() {
    const { database: db } = useDatabase();
    const { logsByMonth, getLogsGroupedByMonth, getLogsGroupedByDay } =
      useLogs();

    const logsByMonthReversed = computed(
      (): LogsByMonth => logsByMonth.value.slice().reverse()
    );

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
      logsByMonthReversed,
      getLogsGroupedByMonth,
      getLogsGroupedByDay,
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
  .day {
    border-bottom: 1px dashed $primary;
    margin-bottom: 1em;
  }
  .log {
    padding: 0 0 1em 0;
    margin-bottom: 1em;
    border-bottom: 1px dashed $gray-very-light;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }

    //&:nth-child(odd) {
    //  background-color: $gray-lightest;
    //}
  }
}
</style>
