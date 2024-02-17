import { setGenreFilterProp } from "../../../../../../components/organisms/genres/RenderGenre/hooks/interface/interface";

export interface listOfGenres {
  handleGenreFilter: () => void;
  genreFilter: number[];
  setGenreFilter: setGenreFilterProp;
}