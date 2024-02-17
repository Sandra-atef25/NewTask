import { Item } from "../../../molecules/Item";
import { useRenderProp } from "./hooks/interface/interface";
import {  useRenderItem } from "./hooks/useRenderItem";
const RenderGenreItem= ({ item, genreFilter,handleGenreFilter,setGenreFilter}: useRenderProp) => {
    const {backgroundColor,color,pressHandle} =useRenderItem({genreFilter,handleGenreFilter,item,setGenreFilter});
    return (
        <Item
            item={item}
            onPress={pressHandle.bind(this, item)}
            backgroundColor={backgroundColor}
            textColor={color}
        />
    );
};
export default RenderGenreItem;