import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import NotificationsStack from "./NotificationsStack";
import FeedStack from "./FeedStack";
import SearchStack from "./SearchStack";
import SettingsStack from "./SettingsStack";

import { Ionicons } from "@expo/vector-icons";

const MainStackTwo=() =>{
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreens"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      {/*<Tab.Screen
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
      />*/}
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
        name="SearchScreen"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          tabBarLabel: "Search",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="WishListScreen"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          tabBarLabel: "WishList",
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
};
export default MainStackTwo;
