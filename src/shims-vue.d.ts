declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface Date {
  getMonthName(): string;
  getMonthAndYear(): string;
  getDayAndMonth(): string;
}
