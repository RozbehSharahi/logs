<template>
  <the-layout :checkDatabaseLoaded="true">
    <the-statistics />
  </the-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLayout from "@/components/TheLayout.vue";
import TheStatistics from "@/components/TheStatistics.vue";

export default defineComponent({
  components: { TheStatistics, TheLayout },
});
</script>
