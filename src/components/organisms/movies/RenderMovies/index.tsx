import { MoviesProps } from "../../../../models/Movies";
import { MovieItem } from "../MovieItemCard";
import { useRenderMovies } from "./Hooks/useRenderMovies";
const RenderMovies = ({ item }: { item: MoviesProps }) => {
    const { pressHandle } = useRenderMovies();
    return (
        <MovieItem movieItem={item}
            onPress={pressHandle.bind(this, item)}
        />
    );
};
export default RenderMovies;