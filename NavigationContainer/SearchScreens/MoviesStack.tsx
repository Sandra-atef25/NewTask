import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingMoviesScreen from "../../Screens/Search/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/Search/Movies/DetailsScreen";
import MoviesContextProvider from '../../Components/MoviesContext/MoviesContext';

const MoviesStack=() =>{
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="ListingMovies" screenOptions={{headerStyle:{backgroundColor:'black'}}}>
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{ headerShown:false}} />
            <stack.Screen name="TheMovieSelected" component={DetailsMoviesScreen} />
        </stack.Navigator>
    );
};
export default MoviesStack;