export interface MovieApiData {
  results: MovieList[];
}

export interface MovieList {
  title: string;
  vote_average: number;
  release_date: string;
}
