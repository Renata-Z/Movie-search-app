export const getIsInputFocused = () => {
  const searchInput = document.getElementById("movieSearchInput");
  return document.activeElement === searchInput;
};

export const getYear = (date: string) => {
  const dateArr = date.split("-");
  return dateArr[0];
};
