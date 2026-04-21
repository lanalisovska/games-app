export const formatDate = (
  dateStr: string,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
) => new Date(dateStr).toLocaleDateString("en-US", options);
