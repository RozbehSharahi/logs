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
  background-color: $primary;
  color: #fff;
  padding: 0 1em;
  border-radius: 1em;
}
</style>
