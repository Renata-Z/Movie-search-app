export const getIsInputFocused = () => {
  const searchInput = document.getElementById("movieSearchInput");
  return document.activeElement === searchInput;
};

// export const fetchMovieData = () => {
// const apiKey = "e28f9fb961ad7686205a9e20b8f92dcb";
// // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
// axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
//   const { data } = response;
//   return data;
// const firstEightMovies = data.results.slice(0, 8);
// });
// };

export const getYear = (date: string) => {
  const dateArr = date.split("-");
  return dateArr[0];
};
