import { Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";
function SettingsScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("SettingsDetails");
  }

  return (
    <Welcome>
      <Button title="Settings Details" onPress={onpresshandle} color="red" />
    </Welcome>
  );
}
export default SettingsScreen;
