import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import UserContextProvider from "./Components/UsernameContext/UserContext";

import MainStackAuthentication from "./NavigationContainer/AuthenticationScreens";
import MainStackTwo from "./NavigationContainer/StackTwo";
//import { Provider } from "react-redux";
//import {store}  from "./Components/MoviesContext/MoviesContext";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar style="light"/>
      {/*<SafeAreaView style={{ flex: 1 }}>*/}
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
        {/*</Provider>



  </SafeAreaView>*/}
    </>
  );
}

