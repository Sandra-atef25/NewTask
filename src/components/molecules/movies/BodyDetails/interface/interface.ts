import { ItemData } from "../../../../../models/Genres";
import { MoviesProps } from "../../../../../models/Movies";

export interface movieDetailsProps{
  Movie: MoviesProps;
  matchingGenres: Array<ItemData>;
}
