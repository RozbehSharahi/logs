<template>
  <div>
    <div>Total log entries: {{ count }}</div>
    <div v-for="log in logs" :key="log.getIdentifier()">
      {{ log.getContent() }}
    </div>
    {{ months }}
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useFileStore } from "@/composables/file-store";
import { useDatabase } from "@/composables/database";
import { Log } from "@/model/log";
export default defineComponent({
  setup() {
    const { all } = useDatabase(useFileStore().database.value);
    const logs = all("log") as Log[];

    const months = computed(() => {
      const monthsMap: {
        [key: string]: number;
      } = {};
      for (const log of logs) {
        let index = log.getMonthString();
        let monthHours = monthsMap[index] || 0;
        monthHours += log.getHours();
        monthsMap[index] = monthHours;
      }
      const months = [];
      for (const monthString in monthsMap) {
        months.push({
          date: new Date(
            parseInt(monthString.split("/")[0]),
            parseInt(monthString.split("/")[1]) - 1,
            2
          ),
          hours: monthsMap[monthString],
        });
      }
      return months;
    });

    return {
      logs,
      months,
      count: logs.length,
    };
  },
});
</script>
<style lang="scss" scoped></style>
