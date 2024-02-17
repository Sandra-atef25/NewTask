import { MoviesProps } from "../../../../../../models/Movies";

export interface asyncStorageProps {
  page: number;
  fetchedMovies: MoviesProps[];
}
