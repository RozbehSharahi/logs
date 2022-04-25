<template>
  <div>
    <the-headline label="Statistics" />
    <the-grid>
      <div class="w-1/2">
        <the-bar-chart
          class="mb-20"
          :data="{
            labels: monthYears.map(
              (v) => `${v.getFullYear()}/${v.getMonth() + 1}`
            ),
            datasets: [
              {
                label: 'Total',
                backgroundColor: colorByIndex(0),
                data: monthYears.map((monthYear) =>
                  sum(
                    getLogsByMonth(
                      logs,
                      monthYear.getFullYear(),
                      monthYear.getMonth() + 1
                    ).map((v) => v.getHours())
                  )
                ),
              },
            ],
          }"
          :height="200"
        />
      </div>
      <div class="w-1/2">
        <the-bar-chart
          class="mb-20"
          :data="{
            labels: monthYears.map(
              (v) => `${v.getFullYear()}/${v.getMonth() + 1}`
            ),
            datasets: tags.map((tag, index) => ({
              label: tag.getLabel(),
              backgroundColor: colorByIndex(index),
              data: monthYears.map((month) =>
                sum(
                  getLogsByTagAndMonth(
                    logs,
                    tag,
                    month.getFullYear(),
                    month.getMonth() + 1
                  ).map((v) => v.getHours())
                )
              ),
            })),
          }"
          :height="200"
        />
      </div>
    </the-grid>
    <the-table class="mb-20">
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
import { colorByIndex, sum } from "@/utils/utils";
import TheBarChart from "@/components/Chart/TheBarChart.vue";
import TheGrid from "@/components/TheGrid.vue";

export default defineComponent({
  components: { TheGrid, TheBarChart, TheTable, TheHeadline },
  setup() {
    const year = computed(() => new Date().getFullYear());
    return {
      year,
      sum,
      colorByIndex,
      ...useLogs(),
    };
  },
});
</script>
<style lang="scss" scoped></style>
