<template>
  <span class="the-date">{{ dateString }}</span>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    date: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    return {
      dateString: computed(() => {
        return props.date.toDateString().substr(4, 11);
      }),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/assets/scss/variables";
.the-date {
  border-right: 1px solid $primary;
  margin-right: 0.5em;
  padding-right: 0.5em;
}
</style>
