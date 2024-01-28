
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const StackAll=({MoviesStack,TVStack}) =>{
  const MaterialTop = createMaterialTopTabNavigator();

  return (
      <MaterialTop.Navigator 
        initialRouteName="Movies"
        screenOptions={{ tabBarStyle: { backgroundColor: "black",paddingTop:10},}} >
        <MaterialTop.Screen name ="Movies" component={MoviesStack} options={{ tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>
        <MaterialTop.Screen name = "Series" component={TVStack} options={{tabBarLabelStyle:{color:'white',fontWeight:'bold'},tabBarActiveTintColor:'white',tabBarScrollEnabled:false}}/>

      </MaterialTop.Navigator>
   
  );
};

export default StackAll;

