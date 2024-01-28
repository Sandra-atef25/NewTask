import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import HomeScreen from "../Screens/Home/HomeScreen";
//import HomeDetails from "../Screens/Home/HomeDetails";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import TVStack from "./HomeScreens/TvStack";
import MoviesStack from "./HomeScreens/MoviesStack";

const HomeStack=() =>{
  const MaterialTop = createMaterialTopTabNavigator();

  return (
      <MaterialTop.Navigator
        initialRouteName="Movies"
        screenOptions={{ tabBarStyle: { backgroundColor: "black",paddingTop:10} }}>
        <MaterialTop.Screen name ="Movies" component={MoviesStack} options={{ tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>
        <MaterialTop.Screen name = "TV" component={TVStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>

      </MaterialTop.Navigator>
   
  );
};

export default HomeStack;
/*
const HomeStack=() =>{
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{ headerTitle: "Home Details" }}
      />
    </Stack.Navigator>
  );
};*/
