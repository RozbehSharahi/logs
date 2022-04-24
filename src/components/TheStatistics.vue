<template>
  <div>
    <the-headline label="Statistics" />
    <the-table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="monthHour in getMonthHoursOfYear(year)"
          :key="monthHour.name"
        >
          <td>{{ year }} {{ monthHour.date.toString().substring(4, 7) }}</td>
          <td :class="{ 'font-bold': monthHour.hours > 0 }">
            {{ monthHour.hours }}
          </td>
        </tr>
      </tbody>
    </the-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useLogStatistics } from "@/composables/log-statistics";
import TheHeadline from "@/components/TheHeadline.vue";
import TheTable from "@/components/TheTable.vue";
export default defineComponent({
  components: { TheTable, TheHeadline },
  setup() {
    const year = computed(() => new Date().getFullYear());
    return {
      year,
      ...useLogStatistics(),
    };
  },
});
</script>
<style lang="scss" scoped></style>
