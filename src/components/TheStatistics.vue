<template>
  <div>
    <the-headline label="Statistics" />
    <the-table>
      <thead>
        <tr>
          <th>Month</th>
          <th v-for="item in logsByTag" :key="item.tag.getIdentifier()">
            {{ item.tag.getLabel() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in logsByMonth" :key="`${item.year}-${item.month}`">
          <td>{{ item.year }} {{ item.monthName }}</td>
          <td
            v-for="itemByTag in logsByTag"
            :key="itemByTag.tag.getIdentifier()"
          >
            {{
              sum(
                getLogsByMonth(itemByTag.logs, item.year, item.month).map((v) =>
                  v.getHours()
                )
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
