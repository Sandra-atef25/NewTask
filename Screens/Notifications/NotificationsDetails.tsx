import { Button } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
function NotificationsDetails({ navigation }) {
  function pressgoback() {
    navigation.goBack();
  }
  function pressnext() {
    navigation.navigate("AccountDetails");
  }
  return (
    <PrimaryButton onPress={pressgoback}>
      <Button title="Account Details" onPress={pressnext} color='blue'/>
    </PrimaryButton>
  );
}
export default NotificationsDetails;
