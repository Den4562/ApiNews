export function formatedDate(date) {
  const formatedDate = date.toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formatedDate;
}
export function formatedTime(date) {
  const formatedTime = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return formatedTime;
}
