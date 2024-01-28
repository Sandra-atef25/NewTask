import {  Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";

const HomeScreen=({ navigation }) =>{
  //const username = route.params.UserName;
  const onPressHandle=() =>{
    navigation.navigate("HomeDetails");
  };
  return (
    <Welcome>
      <Button title="Home Details" onPress={onPressHandle} color="red" />
    </Welcome>
  );
};
export default HomeScreen;
