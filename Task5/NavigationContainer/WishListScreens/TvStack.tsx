import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingTVScreen from "../../Screens/WishList/Tv/ListingScreens";
import DetailsTVScreen from "../../Screens/WishList/Tv/DetailsScreen";
const TVStack=() =>{
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="ListingSeries"screenOptions={{headerStyle:{backgroundColor:'black'}}}>
            <stack.Screen name="ListingSeries" component={ListingTVScreen} options={{ headerShown:false}} />
            <stack.Screen name="SeriesDetails" component={DetailsTVScreen} options={{ headerShown:false}} />
        </stack.Navigator>

    );
};
export default TVStack;