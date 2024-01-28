import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import UserContextProvider from "./Components/UsernameContext/UserContext";
import MainStackAuthentication from "./NavigationContainer/AuthenticationScreens";
import MainStackTwo from "./NavigationContainer/StackTwo";
import { store } from "./Components/MoviesContext/MoviesRedux";
export default function App() {
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
}

