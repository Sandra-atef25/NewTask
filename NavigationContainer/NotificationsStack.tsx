import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotificationsScreen from "../Screens/Notifications/NotificationsScreen";
import NotificationsDetails from "../Screens/Notifications/NotificationsDetails";

function NotificationsStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen
        name="NotificationsDetails"
        component={NotificationsDetails}
        options={{
          headerTitle: "Notifications Details",
        }}
      />
    </Stack.Navigator>
  );
}
export default NotificationsStack;
