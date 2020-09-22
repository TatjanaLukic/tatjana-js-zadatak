import { getUrl } from "../utils/helpers";

it("getUrl with no category", () => {
  const url = getUrl("us", "", 20);

  expect(url).toBe("/top-headlines?country=us&pageSize=20");
});

it("getUrl with category", () => {
  const url = getUrl("gb", "sport", 20);

  expect(url).toBe("/top-headlines?country=gb&category=sport&pageSize=20");
});
