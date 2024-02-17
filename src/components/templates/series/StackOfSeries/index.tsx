import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { TvProps } from '../../../../models/Tv';
import { Colors } from "../../../../theme/colors/Colors";
export type SeriesScreenNames = ["ListingSeries", "SeriesDetails"]; // type these manually
export type SeriesParams={
    serieDetails:TvProps
}
export type SeriesStackParamList ={
    ListingSeries:undefined;
    SeriesDetails:SeriesParams;

};
export type SeriesStackNavigation = NavigationProp<SeriesStackParamList>;
export type SeriesRouteProp=RouteProp<SeriesStackParamList>;
const StackOfSeries=({ListingTVScreen,DetailsTVScreen}) =>{
    const stack = createNativeStackNavigator<SeriesStackParamList>();
    return (
        
        <stack.Navigator initialRouteName="ListingSeries"screenOptions={{headerStyle:{backgroundColor:Colors.black}}}>
            <stack.Screen name="ListingSeries" component={ListingTVScreen} options={{ headerShown:false}} />
            <stack.Screen name="SeriesDetails" component={DetailsTVScreen} options={{ headerShown:false}} />
        </stack.Navigator>

    );
};
export default StackOfSeries;