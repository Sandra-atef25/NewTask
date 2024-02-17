
import ListingMoviesScreen from "../../../../../screens/Search/Movies/ListingMoviesScreen/index";
import DetailsMoviesScreen from "../../../../../screens/Search/Movies/DetailsMovieScreen/index";
import StackOfMovies from "../../../../../components/templates/movies/StackOfMovies";
const MoviesStack = () => {
    return (
        <StackOfMovies ListingMoviesScreen={ListingMoviesScreen} DetailsMoviesScreen={DetailsMoviesScreen} />
    );
};
export default MoviesStack;