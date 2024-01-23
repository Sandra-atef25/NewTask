import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TVStack from "./SearchScreens/TvStack";
import MoviesStack from "./SearchScreens/MoviesStack";

const SearchStack=() =>{
  const MaterialTop = createMaterialTopTabNavigator();

  return (
      <MaterialTop.Navigator
        initialRouteName="Movies"
        screenOptions={{ tabBarStyle: { backgroundColor: "black",paddingTop:10} }}>
        <MaterialTop.Screen name ="Movies" component={MoviesStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>
        <MaterialTop.Screen name = "TV" component={TVStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>

      </MaterialTop.Navigator>
   
  );
};
export default SearchStack;
