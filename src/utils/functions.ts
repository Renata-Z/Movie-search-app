export const getYear = (date: string) => {
  const dateArr = date.split("-");
  return dateArr[0];
};
