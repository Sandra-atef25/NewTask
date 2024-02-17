import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../../../screens/authentication/Register/index";
import LoginScreen from "../../../screens/authentication/Login/index";
import { NavigationProp } from "@react-navigation/native";
import { Colors } from "../../../theme/colors/Colors";

export type AuthenticationScreenNames = ["Login", "Register"];// type these manually

export type AuthenticationStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type AuthenticationStackNavigation = NavigationProp<AuthenticationStackParamList>;
const MainStackAuthentication = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.babyBlue },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

    </Stack.Navigator>
  );
};
export default MainStackAuthentication;
