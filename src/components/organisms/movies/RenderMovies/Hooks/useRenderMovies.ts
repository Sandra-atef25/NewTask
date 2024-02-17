import { useNavigation } from "@react-navigation/native";
import { MoviesProps } from "../../../../../models/Movies";
import { MoviesStackNavigation } from "../../../../templates/movies/StackOfMovies";

export const useRenderMovies = () => {
  const navigation = useNavigation<MoviesStackNavigation>();
  const pressHandle = (movie: MoviesProps) => {
    navigation.navigate("TheMovieSelected", { movieDetails: movie });
  };

  return { pressHandle };
};
