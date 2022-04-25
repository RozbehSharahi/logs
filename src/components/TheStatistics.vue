<template>
  <div>
    <the-headline label="Statistics" />
    <the-table>
      <thead>
        <tr>
          <th>Month</th>
          <th v-for="tag in tags" :key="tag.getIdentifier()">
            {{ tag.getLabel() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="monthYear in monthYears" :key="`${monthYear}`">
          <td>{{ monthYear.getFullYear() }}/{{ monthYear.getMonth() + 1 }}</td>
          <td v-for="tag in tags" :key="tag.getIdentifier()">
            {{
              sum(
                getLogsByTagAndMonth(
                  logs,
                  tag,
                  monthYear.getFullYear(),
                  monthYear.getMonth() + 1
                ).map((log) => log.getHours())
              )
            }}
          </td>
        </tr>
      </tbody>
    </the-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useLogs } from "@/composables/logs";
import TheHeadline from "@/components/TheHeadline.vue";
import TheTable from "@/components/TheTable.vue";
import { sum } from "@/utils/utils";
export default defineComponent({
  components: { TheTable, TheHeadline },
  setup() {
    const year = computed(() => new Date().getFullYear());
    return {
      year,
      sum,
      ...useLogs(),
    };
  },
});
</script>
<style lang="scss" scoped></style>
