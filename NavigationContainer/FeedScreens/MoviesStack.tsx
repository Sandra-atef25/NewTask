import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingMoviesScreen from "../../Screens/Feed/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/Feed/Movies/DetailsScreen";

const MoviesStack=() =>{
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="ListingMovies">
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{ headerTitle: "Listing Movies" }} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} />
        </stack.Navigator>
    );
};
export default MoviesStack;