export function findNextTabElement(
  universeSelector = "input, button, select, textarea, a[href]"
): HTMLElement {
  const el = document.activeElement;
  const universe = document.querySelectorAll(universeSelector);
  const list = Array.prototype.filter.call(universe, function (item) {
    return item.tabIndex >= "0";
  });
  const index = list.indexOf(el);
  return list[index + 1] || list[0];
}

export function findPreviousTabElement(
  universeSelector = "input, button, select, textarea, a[href]"
): HTMLElement {
  const el = document.activeElement;
  const universe = document.querySelectorAll(universeSelector);
  const list = Array.prototype.filter
    .call(universe, function (item) {
      return item.tabIndex >= "0";
    })
    .reverse();
  const index = list.indexOf(el);
  return list[index + 1] || list[0];
}
