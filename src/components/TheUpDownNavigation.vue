<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  props: {
    selector: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const methods = {
      currentItems: (): HTMLElement[] => {
        return Array.from(document.querySelectorAll(props.selector));
      },
      keydownHandler: (e: KeyboardEvent) => {
        if (!props.enabled) return;
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        methods.select(e.key === "ArrowDown" ? "next" : "previous");
      },
      up: (e: KeyboardEvent) => {
        if (e.key !== "ArrowUp") return;
        methods.select("previous");
      },
      select(action: "next" | "previous") {
        const items =
          action === "next"
            ? methods.currentItems()
            : methods.currentItems().reverse();

        const activeElement = document.activeElement as HTMLElement;

        const currentIndex = items.findIndex((v) => v === activeElement);

        if (currentIndex === -1) return items[0].focus();
        if (currentIndex === items.length - 1) return items[0].focus();

        return items[currentIndex + 1].focus();
      },
    };

    onMounted(() =>
      document.addEventListener("keydown", methods.keydownHandler)
    );
    onUnmounted(() =>
      document.removeEventListener("keydown", methods.keydownHandler)
    );

    return {};
  },
});
</script>
