interface IDomComposable {
  findOneHtmlElementOrNull(selector: string): HTMLElement | null;
}

export function useDom(): IDomComposable {
  const findOneHtmlElementOrNull = (selector: string): HTMLElement | null => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return null;
    if (elements.length > 1) {
      console.log(`More than one element found for selector: ${selector}`);
    }

    const element = elements[0];
    if (!(element instanceof HTMLElement)) return null;
    return element;
  };
  return { findOneHtmlElementOrNull };
}
