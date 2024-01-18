import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MovieSelected } from '../../Components/MoviesContext/MoviesContext';
import { useContext } from "react";
import MoviesContextProvider from '../../Components/MoviesContext/MoviesContext';
import ListingMoviesScreen from "../../Screens/Feed/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/Feed/Movies/DetailsScreen";

function MoviesStack() {
    const stack = createNativeStackNavigator();
    const movieselectedtitle = useContext(MovieSelected);
    return (
        <stack.Navigator initialRouteName="ListingMovies">
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{ headerTitle: "Listing Movies" }} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} options={{ headerTitle: "The Movie Selected" }} />
        </stack.Navigator>


    );
}
export default MoviesStack;