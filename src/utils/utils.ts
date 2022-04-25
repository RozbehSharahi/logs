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

export function sum(array: number[]): number {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum;
}

export function monthName(month: number): string {
  return (
    [
      "NaM",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][month] || "NaM"
  );
}

export function colorByIndex(index: number): string {
  return (
    ["#2062a2", "#8d1919", "#c9a712", "#18c912", "#868628", "#c2199a"][index] ||
    "#000"
  );
}
