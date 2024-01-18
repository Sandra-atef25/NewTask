import { Button } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
function SettingsDetails({ navigation }) {
  function presslogout() {
    navigation.navigate("Login");
  }
  function pressgoback() {
    navigation.goBack();
  }
  return (
    <PrimaryButton onPress={pressgoback}>
      <Button title="Log Out" onPress={presslogout} color='blue' />
    </PrimaryButton>
  );
}
export default SettingsDetails;
