import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import SettingsStack from "./SettingsStack";
import WishListStack from "./WishlistStack";

import FavoritesContextProvider from "../../../store/FavoritesContext/FavoritesContext";
import { NavigationProp } from "@react-navigation/native";
import { Colors } from "../../../theme/colors/Colors";
export type MediaScreenNames = ["HomeScreens", "SearchScreen", "WishListScreen", "SettingsScreens"];// type these manually

export type MediaStackParamList = {
  HomeScreens: undefined;
  SearchScreen: undefined;
  WishListScreen: undefined;
  SettingsScreens: undefined;
};
export type MediaStackNavigation = NavigationProp<MediaStackParamList>;
const MainStackTwo = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <FavoritesContextProvider>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.black },
            tabBarStyle: { backgroundColor: Colors.black},
            tabBarActiveTintColor: Colors.red
          }}
        >

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
            component={WishListStack}
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
      </FavoritesContextProvider>
    </>
  );
};
export default MainStackTwo;
