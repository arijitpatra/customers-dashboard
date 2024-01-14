// fn takes dateTime string and returns in the format: Oct 5, 2021, 9:33 AM
export const dateTimeFormatter = (dateTime: string) => {
  const dateObject = new Date(dateTime);

  const options: Record<string, string> = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return dateObject.toLocaleString("en-US", options);
};
