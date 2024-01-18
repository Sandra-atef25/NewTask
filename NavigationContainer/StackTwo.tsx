import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import NotificationsStack from "./NotificationsStack";
import FeedStack from "./FeedStack";
import SettingsStack from "./SettingsStack";

import { Ionicons } from "@expo/vector-icons";

function MainStackTwo() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreens"
      screenOptions={{
        headerStyle: { backgroundColor: "lightblue" },
        tabBarStyle: { backgroundColor: "darkblue" },
      }}
    >
      <Tab.Screen
        name="AccountScreens"
        component={AccountStack}
        options={{
          headerTitle: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          tabBarLabel: "Account",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NotificationScreens"
        component={NotificationsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
          tabBarLabel: "Notifications",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeScreens"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FeedScreens"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wifi" color={color} size={size} />
          ),
          tabBarLabel: "Feed",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingsScreens"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          tabBarLabel: "Settings",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default MainStackTwo;
