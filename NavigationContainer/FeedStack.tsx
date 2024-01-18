//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedScreen from "../Screens/Feed/FeedScreen";
import FeedDetails from "../Screens/Feed/FeedDetails";

import TVStack from "./FeedScreens/TvStack";
import MoviesStack from "./FeedScreens/MoviesStack";

function FeedStack() {
  const MaterialTop = createMaterialTopTabNavigator();

  return (
      <MaterialTop.Navigator
        initialRouteName="Movies"
        screenOptions={{ tabBarStyle: { backgroundColor: "lightblue",} }}

      >
        {/*<MaterialTop.Screen name="Feed" component={FeedScreen} />
        <MaterialTop.Screen
          name="FeedDetails"
          component={FeedDetails}
          options={{ tabBarLabel: "Feed Details" }}
        />*/}
        <MaterialTop.Screen name ="Movies" component={MoviesStack} options={{tabBarScrollEnabled:false}}/>
        <MaterialTop.Screen name = "TV" component={TVStack} options={{tabBarScrollEnabled:false}}/>

      </MaterialTop.Navigator>
   
  );
}
export default FeedStack;
