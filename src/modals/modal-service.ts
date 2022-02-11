import { shallowRef } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Map = { [key: string]: any };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Component = any;

interface IModal {
  component: Component;
  properties: Map;
  listeners: Map;
}

export const modalService = new (class ModalService {
  private modals: IModal[] = [];

  open(component: Component, properties: Map = {}, listeners: Map = {}) {
    this.modals.push({
      component: shallowRef(component),
      listeners,
      properties,
    });
  }

  getModals(): IModal[] {
    return this.modals;
  }
})();
