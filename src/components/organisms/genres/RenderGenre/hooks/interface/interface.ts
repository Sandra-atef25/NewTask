import { ItemData } from "../../../../../../models/Genres";

export type setGenreFilterProp = React.Dispatch<React.SetStateAction<number[]>>;
export interface useRenderProp {
  genreFilter: number[];
  setGenreFilter: setGenreFilterProp;
  handleGenreFilter: () => void;
  item: ItemData;
}
