import { ItemData } from "../../../../models/Genres";

export interface itemProps  {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};