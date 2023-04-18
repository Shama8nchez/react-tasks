export function getQuery(): string {
  const value = localStorage.getItem("value");
  if (value) return value;
  return "";
}
