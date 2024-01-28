
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedScreen from "../Screens/Feed/FeedScreen";
import FeedDetails from "../Screens/Feed/FeedDetails";

import TVStack from "./FeedScreens/TvStack";
import MoviesStack from "./FeedScreens/MoviesStack";

const FeedStack=() =>{
  const MaterialTop = createMaterialTopTabNavigator();

  return (
      <MaterialTop.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: "black",paddingTop:10} }}>
      <MaterialTop.Screen name ="Movies" component={MoviesStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>
      <MaterialTop.Screen name = "TV" component={TVStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>

        {/*<MaterialTop.Screen name="Feed" component={FeedScreen} />
        <MaterialTop.Screen
          name="FeedDetails"
          component={FeedDetails}
          options={{ tabBarLabel: "Feed Details" }}
        />*/}
       
      </MaterialTop.Navigator>
   
  );
};
export default FeedStack;
