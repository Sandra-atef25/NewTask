import { useHandleAsyncStorage } from "./hooks/HandleAsyncStorage";
import DetailsMovies from "../../../../components/organisms/movies/DetailsMovies";

const DetailsMoviesScreen = () => {
    const { MovieDetails, movieIsFavorite, heartButtonPressHandler, posterPathNew,matchingGenres} = useHandleAsyncStorage();
    return (
        <DetailsMovies Movie={MovieDetails} heartButtonPressHandler={heartButtonPressHandler} matchingGenres={matchingGenres} movieIsFavorite={movieIsFavorite} posterPath={posterPathNew} />
    );
}
export default DetailsMoviesScreen;


