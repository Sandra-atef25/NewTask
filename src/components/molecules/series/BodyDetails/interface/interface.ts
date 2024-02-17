import { ItemData } from "../../../../../models/Genres";
import { TvProps } from "../../../../../models/Tv";

export interface tvDetailsProps {
  TvSeries: TvProps;
  matchingGenres: Array<ItemData>;
}
