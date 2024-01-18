import {  Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";

function HomeScreen({ route, navigation }) {
  //const username = route.params.UserName;
  function onpresshandle() {
    navigation.navigate("HomeDetails");
  }
  return (
    <Welcome>
      <Button title="Home Details" onPress={onpresshandle} color="red" />
    </Welcome>
  );
}
export default HomeScreen;
