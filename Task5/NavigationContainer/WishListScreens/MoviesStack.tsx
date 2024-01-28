import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingMoviesScreen from "../../Screens/WishList/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/WishList/Movies/DetailsScreen";

const MoviesStack=() =>{
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="ListingMovies" screenOptions={{headerStyle:{backgroundColor:'black'}}}>
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{ headerShown:false}} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} options={{ headerShown:false}} />
        </stack.Navigator>
    );
};
export default MoviesStack;