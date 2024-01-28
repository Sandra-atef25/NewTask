import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../Screens/Authentication/RegisterScreen";
import LoginScreen from "../Screens/Authentication/LoginScreen";

const MainStackAuthentication=()=> {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#94bbe9" },
      }}
    >
      
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    
    </Stack.Navigator>
   
    
   
  );
};
export default MainStackAuthentication;
