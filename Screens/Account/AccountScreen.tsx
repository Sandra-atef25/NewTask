import { Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";
function AccountScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("AccountDetails");
  }
  return (
    <Welcome>
      <Button title="Account Details" onPress={onpresshandle} color="red" />
    </Welcome>
  );
}
export default AccountScreen;

