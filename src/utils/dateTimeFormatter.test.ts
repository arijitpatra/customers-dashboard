import { dateTimeFormatter } from "./dateTimeFormatter";

describe("Unit test for dateTimeFormatter util fn:", () => {
  test("formats the date and time correctly:", () => {
    expect(dateTimeFormatter("2021-10-05T07:33:02Z")).toEqual(
      "Oct 5, 2021, 9:33 AM"
    );
    expect(dateTimeFormatter("2022-05-30T10:40:32Z")).toEqual(
      "May 30, 2022, 12:40 PM"
    );
    expect(dateTimeFormatter("2022-05-30T10:40:32Z")).not.toEqual(
      "May 1, 2022, 12:40 PM"
    );
  });
});
