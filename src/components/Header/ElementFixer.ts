export class ElementFixer {
  el: HTMLElement;

  constructor(element: HTMLElement) {
    this.el = element;

    this.init();
  }

  init() {
    console.log('init');
  }

  destroy() {
    console.log('destroy');
  }
}
