import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/Home/HomeScreen";
import HomeDetails from "../Screens/Home/HomeDetails";

function HomeStack() {
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
}
export default HomeStack;
