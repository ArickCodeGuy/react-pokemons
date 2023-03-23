type Options = {
  debug?: boolean;
};

const defaultOptions: Options = {
  debug: false,
};

/**
 * @description Used for fixing an element with `position: fixed` and adding fake empty element after current with exact height of original to prevent page jumping
 */
export const ElementFixer = (
  element: HTMLElement,
  optionsToSet: Options = {}
) => {
  const el = element;
  const fakeEl = document.createElement('div');
  const options: Options = Object.assign({}, defaultOptions, optionsToSet);

  const setFakeElHeight = () => {
    options.debug && console.log('ElementFixer: setFakeElHeight');

    fakeEl.style.height = `${el.clientHeight}px`;
  };

  const handleWindowResize = () => {
    options.debug && console.log('ElementFixer: handleWindowResize');

    setFakeElHeight();
  };

  const init = () => {
    options.debug && console.log('ElementFixer: init');

    el.style.position = 'fixed';
    el.insertAdjacentElement('afterend', fakeEl);

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
  };

  const destroy = () => {
    options.debug && console.log('ElementFixer: destroy');

    el.style.position = '';
    fakeEl.remove();

    window.removeEventListener('resize', handleWindowResize);
  };

  init();

  return {
    init,
    destroy,
  } as const;
};
