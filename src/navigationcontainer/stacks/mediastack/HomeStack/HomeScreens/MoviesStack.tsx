import ListingMoviesScreen from "../../../../../screens/Home/Movies/ListingMoviesScreen/index";
import DetailsMoviesScreen from "../../../../../screens/Home/Movies/DetailsMovieScreen/index";
import StackOfMovies from "../../../../../components/templates/movies/StackOfMovies";
const MoviesStack = () => {
    return (
        <StackOfMovies ListingMoviesScreen={ListingMoviesScreen} DetailsMoviesScreen={DetailsMoviesScreen} />
    );
};
export default MoviesStack;