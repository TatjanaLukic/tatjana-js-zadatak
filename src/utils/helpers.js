export const getUrl = (country, categoryName, pageSize) => {
  let categoryParam = categoryName ? `&category=${categoryName}` : "";
  let pageSizeParam = pageSize ? `&pageSize=${pageSize}` : "";
  return `/top-headlines?country=${country}${categoryParam}${pageSizeParam}`;
};
