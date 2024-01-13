export const dateTimeFormatter = (dateTime: string) => {
  const dateObject = new Date(dateTime);

  const options: Record<string, string> = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return dateObject.toLocaleString("en-US", options);
};
