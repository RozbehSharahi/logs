<template>
  <div class="the-tag-list">
    <the-tag v-for="tag in tags" :key="tag" :label="tag || 'xxx'" />
  </div>
</template>
<script>
import TheTag from "@/components/TheTag.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TheTag },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.the-tag-list {
}
.the-tag {
  margin-right: 0.5em;
}
</style>
