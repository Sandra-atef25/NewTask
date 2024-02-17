export interface listOfMoviesProps {
  fetchedMovies: any;
  handleEndReached: () => void;
  isFetchingMovies: boolean;
  noMatchingMovie: boolean;
}
