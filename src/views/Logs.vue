<template>
  <the-layout :checkDatabaseLoaded="true">
    <the-logs />
  </the-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLogs from "@/components/TheLogs.vue";
import TheLayout from "@/components/TheLayout.vue";

export default defineComponent({
  components: { TheLayout, TheLogs },
});
</script>
<style lang="scss" scoped>
.the-database-picker {
  max-width: 600px;
}
</style>
