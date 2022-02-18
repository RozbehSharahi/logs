import { shallowRef } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Map = { [key: string]: any };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Component = any;

interface IModal {
  component: Component;
  properties?: Map;
  listeners?: Map;
}

export const modalService = new (class ModalService {
  private modals: IModal[] = [];

  open(modal: IModal) {
    modal.component = shallowRef(modal.component.default);
    modal.listeners = modal.listeners || {};
    modal.listeners.close = () => this.pop();
    this.modals.push(modal);
  }

  pop() {
    this.modals.pop();
  }

  getModals(): IModal[] {
    return this.modals;
  }
})();
