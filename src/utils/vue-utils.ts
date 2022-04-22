import { watch } from "vue";

// eslint-disable-next-line
export function watchImmediate(source: any, cb: (v: any) => void) {
  watch(source, cb, { immediate: true });
}
