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
        let day = props.date.getDate();
        let month = props.date.getMonth() + 1;
        let year = props.date.getFullYear();
        return `${day}.${month}.${year}`;
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
