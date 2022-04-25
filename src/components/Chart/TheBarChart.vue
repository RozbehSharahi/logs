<template>
  <Bar
    :chart-data="data"
    :chart-options="chartOptions"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: { Bar },
  props: {
    data: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: (): unknown => ({
        responsive: true,
      }),
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 200,
    },
  },
};
</script>
