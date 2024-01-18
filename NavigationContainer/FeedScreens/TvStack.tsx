import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingTVScreen from "../../Screens/Feed/Tv/ListingScreens";
import DetailsTVScreen from "../../Screens/Feed/Tv/DetailsScreen";
import TVContextProvider from "../../Components/TVContext/TVContext";
function TVStack() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="List">
            <stack.Screen name="ListingSeries" component={ListingTVScreen} options={{ headerTitle: "Listing Series" }} />
            <stack.Screen name="SeriesDetails" component={DetailsTVScreen} options={{ headerTitle: "The Series Selected" }} />
        </stack.Navigator>

    );
}
export default TVStack;