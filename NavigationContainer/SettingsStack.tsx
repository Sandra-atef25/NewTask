import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsDetails from "../Screens/Settings/SettingsDetails";
import SettingsScreen from "../Screens/Settings/SettingsScreen";

function SettingsStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{
          headerTitle: "Settings Details",
        }}
      />
    </Stack.Navigator>
  );
}
export default SettingsStack;
