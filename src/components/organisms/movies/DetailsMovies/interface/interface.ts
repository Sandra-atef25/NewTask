import { ItemData } from "../../../../../models/Genres";
import { MoviesProps } from "../../../../../models/Movies";

export interface movieDetailsScreenProp {
  posterPath: string;
  movieIsFavorite: boolean;
  heartButtonPressHandler: () => void;
  Movie: MoviesProps;
  matchingGenres: Array<ItemData>;
}
