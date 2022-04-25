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
        <tr v-for="item in logsByMonth" :key="`${item.year}-${item.month}`">
          <td>{{ item.year }} {{ item.monthName }}</td>
          <td :class="{ 'font-bold': true }">
            {{ item.hours }}
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
export default defineComponent({
  components: { TheTable, TheHeadline },
  setup() {
    const year = computed(() => new Date().getFullYear());
    return {
      year,
      ...useLogs(),
    };
  },
});
</script>
<style lang="scss" scoped></style>
