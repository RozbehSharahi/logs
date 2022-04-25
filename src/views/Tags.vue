<template>
  <the-layout :checkDatabaseLoaded="true">
    <the-tags />
  </the-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLayout from "@/components/TheLayout.vue";
import TheTags from "@/components/TheTags.vue";

export default defineComponent({
  components: { TheTags, TheLayout },
});
</script>
