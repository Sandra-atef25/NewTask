import { ListRenderItem } from "react-native";

export interface listingDataProps {
  noMatchingData: boolean;
  fetchedData: any;
  renderData: ListRenderItem<any>;
  handleEndReached: () => void;
  isFetchingData: boolean;
  title: string;
}
