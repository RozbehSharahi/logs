<!--suppress HtmlUnknownTag -->
<template>
  <div class="container mt-30 px-20">
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
import { useDatabase } from "@/composables/file-store-database";

export default {
  components: { Modals },
  setup(): Record<string, unknown> {
    const { findExactlyOneHtmlElementOrNull: element } = useDom();
    const { registerNormalizer } = useDatabase();

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
      new ShortCut({
        key: "1",
        action: () => element(".short-cutter-1")?.click(),
      }),
      new ShortCut({
        key: "2",
        action: () => element(".short-cutter-2")?.click(),
      }),
      new ShortCut({
        key: "3",
        action: () => element(".short-cutter-3")?.click(),
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
