<template>
  <div class="the-navigation">
    <ul>
      <li>
        <router-link :to="'logs'" class="node">
          <strong>•</strong> Logs
        </router-link>
      </li>
      <li>
        <router-link :to="'tags'" class="node">
          <strong>•</strong> Tags
        </router-link>
      </li>
      <li>
        <router-link :to="'statistics'" class="node">
          <strong>•</strong> Statistics
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
  padding-top: 2em;
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
