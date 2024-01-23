import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingMoviesScreen from "../../Screens/Feed/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/Feed/Movies/DetailsScreen";
import MoviesContextProvider from "../../Components/MoviesContext/MoviesContext";
import FavoritesScreen from "../../Screens/WishList/Movies/ListingScreen";

const MoviesStack=() =>{
    const stack = createNativeStackNavigator();
    return (
            <stack.Navigator initialRouteName="ListingMovies" screenOptions={{headerStyle:{backgroundColor:'black'}}}>
            <stack.Screen name="ListingMovies" component={FavoritesScreen} options={{ headerShown:false}} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} />
        </stack.Navigator>
        
    );
};
export default MoviesStack;