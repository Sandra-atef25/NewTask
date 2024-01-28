
//import HomeScreen from "../Screens/Home/HomeScreen";
//import HomeDetails from "../Screens/Home/HomeDetails";


import TVStack from "./HomeScreens/TvStack";
import MoviesStack from "./HomeScreens/MoviesStack";
import StackAll from "../Components/StackListingAndDetails";

const HomeStack=() =>{

  return (<StackAll MoviesStack={MoviesStack} TVStack={TVStack}/>
   
  );
};

export default HomeStack;
/*
const HomeStack=() =>{
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
};*/
