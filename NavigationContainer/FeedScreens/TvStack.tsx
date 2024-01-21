import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingTVScreen from "../../Screens/Feed/Tv/ListingScreens";
import DetailsTVScreen from "../../Screens/Feed/Tv/DetailsScreen";
const TVStack=() =>{
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="List">
            <stack.Screen name="ListingSeries" component={ListingTVScreen} options={{ headerTitle: "Listing Series" }} />
            <stack.Screen name="SeriesDetails" component={DetailsTVScreen} />
        </stack.Navigator>

    );
};
export default TVStack;