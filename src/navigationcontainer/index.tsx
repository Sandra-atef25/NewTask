import { StatusBar } from "expo-status-bar";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "../store/UsernameContext/UserContext";
import MainStackAuthentication from "./stacks/authenticationstack";
import MainStackTwo from "./stacks/mediastack";
//App thst is the Start of the program it contains 2 stacks one for authentication and the other for 
//internal structure.
export type MoviesScreenNames = ["MainStack", "MainStackTwo"];// type these manually
export type RootStackParamList = {
  MainStack: undefined;
  MainStackTwo: undefined;
};
export type AppStackNavigation = NavigationProp<RootStackParamList>;
const AppRoute=()=> {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <UserContextProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="MainStack"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="MainStack"
                  component={MainStackAuthentication}
                />
                <Stack.Screen name="MainStackTwo" component={MainStackTwo} />
              </Stack.Navigator>
            </NavigationContainer>
      </UserContextProvider>
    </>
  );
};
export default AppRoute;


