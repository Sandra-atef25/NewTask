import { useNavigation } from "@react-navigation/native";
import { TvProps } from "../../../../../models/Tv";
import { SeriesStackNavigation } from "../../../../templates/series/StackOfSeries";

export const useRenderSeries = () => {
  const navigation = useNavigation<SeriesStackNavigation>();
  const pressHandle = (series: TvProps) => {
    navigation.navigate("SeriesDetails", { serieDetails: series });
  };
  return { pressHandle };
};
