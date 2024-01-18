import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../Screens/Authentication/RegisterScreen";
import LoginScreen from "../Screens/Authentication/LoginScreen";
export default function MainStackAuthentication() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "lightblue" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
