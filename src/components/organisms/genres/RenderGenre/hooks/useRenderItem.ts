import { ItemData } from "../../../../../models/Genres";
import { useRenderProp } from "./interface/interface";
export const useRenderItem = ({
  genreFilter,
  setGenreFilter,
  handleGenreFilter,
  item
}: useRenderProp) => {
  const backgroundColor = genreFilter.includes(item.id) ? "black" : "gray";
  const color = genreFilter.includes(item.id) ? "white" : "black";
  const pressHandle = (item: ItemData) => {
    handleGenreFilter();
    //prevList
    // if prevList includes item.id -> remove item.id
    // else add item.id
    setGenreFilter((prevList: number[]) => {
      return prevList.includes(item.id)
        ? prevList.filter((id) => id !== item.id)
        : [...prevList, item.id];
    });
  };
  return {
    pressHandle,
    backgroundColor,
    color
  };
};
