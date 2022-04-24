<template>
  <div class="container mt-30">
    <router-view />
  </div>
  <modals />
</template>

<script lang="ts">
import Modals from "@/modals/component/Modals.vue";
import { Log } from "@/model/log";
import { Tag } from "@/model/tag";
import { ShortCut, shortPacker } from "@rozbehsharahi/shortcuts";
import { useDom } from "@/composables/dom";
import { useFileStore } from "@/composables/file-store";

export default {
  components: { Modals },
  setup(): Record<string, unknown> {
    const { findOneHtmlElementOrNull: element } = useDom();
    const { registerNormalizer } = useFileStore();

    shortPacker.push([
      new ShortCut({
        key: "a",
        action: () => element(".short-cutter-a")?.click(),
      }),
      new ShortCut({
        key: "s",
        action: () => element(".short-cutter-s")?.click(),
      }),
      new ShortCut({
        key: "Escape",
        action: () => element(".short-cutter-escape")?.click(),
      }),
    ]);

    registerNormalizer("log", Log.getNormalizer());
    registerNormalizer("tag", Tag.getNormalizer());

    return {};
  },
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
