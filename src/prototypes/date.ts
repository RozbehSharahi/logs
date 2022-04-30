Date.prototype.getMonthName = function (): string {
  return [
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
  ][this.getMonth()];
};

Date.prototype.getMonthAndYear = function (): string {
  return `${this.getMonthName()}/${this.getFullYear()}`;
};

Date.prototype.getDayAndMonth = function (): string {
  return `${this.getDate()}.${this.getMonthName()}`;
};
