import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingsDetails from "../../../../screens/Settings/SettingsDetails";
import SettingsScreen from "../../../../screens/Settings/SettingsScreen";
import { Colors } from "../../../../theme/colors/Colors";
export type SettingsScreenNames = ["Settings", "SettingsDetails"]; // type these manually

export type SettingsStackParamList ={
  Settings:undefined;
  SettingsDetails:undefined;
};
export type SettingsStackNavigation = NavigationProp<SettingsStackParamList>;
export type SettingsRouteProp=RouteProp<SettingsStackParamList>;
const SettingsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerStyle: { backgroundColor: "black", } }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerTintColor: 'white' }} />
      <Stack.Screen
        name="SettingsDetails"
        component={SettingsDetails}
        options={{
          headerTitle: "Settings Details",
          headerTintColor: Colors.white
        }}
      />
    </Stack.Navigator>
  );
};
export default SettingsStack;
