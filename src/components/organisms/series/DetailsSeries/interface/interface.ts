import { ItemData } from "../../../../../models/Genres";
import { TvProps } from "../../../../../models/Tv";

export interface seriesDetailsProps {
  posterPath: string;
  seriesIsFavorite: boolean;
  heartButtonPressHandler: () => void;
  TvSeries: TvProps;
  matchingGenres: Array<ItemData>;
}
