<template>
  <div class="the-navigation">
    <ul>
      <li>
        <router-link :to="'logs'" class="node short-cutter-1">
          <strong>•</strong> Logs (1)
        </router-link>
      </li>
      <li>
        <router-link :to="'tags'" class="node short-cutter-2">
          <strong>•</strong> Tags (2)
        </router-link>
      </li>
      <li>
        <router-link :to="'statistics'" class="node short-cutter-3">
          <strong>•</strong> Statistics (3)
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/variables";
.the-navigation {
  border-top: 10px solid #eee;
  padding-top: 1em;
  .node {
    display: block;
    padding: 0.5em 1em;
    border-bottom: 1px solid #eee;

    strong {
      opacity: 0.3;
    }

    &.router-link-active {
      font-weight: bold;
      color: $primary;

      strong {
        opacity: 1;
      }
    }
  }
}
</style>
