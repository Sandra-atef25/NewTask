import FavoritesMoviesScreen from "../../../../../screens/WishList/Movies/ListingMoviesScreen/index";
import DetailsMoviesScreen from "../../../../../screens/WishList/Movies/DetailsMovieScreen/index";
import StackOfMovies from "../../../../../components/templates/movies/StackOfMovies";
const MoviesStack=() =>{
    return (
        <StackOfMovies ListingMoviesScreen={FavoritesMoviesScreen} DetailsMoviesScreen={DetailsMoviesScreen}/>
    );
};
export default MoviesStack;