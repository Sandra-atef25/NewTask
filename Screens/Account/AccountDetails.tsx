import { Button, View } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
function AccountDetails({ navigation }) {
  function pressnext() {
    navigation.navigate("AccountDetailsDetails");
  }
  return(
    <PrimaryButton onPress={()=>navigation.goBack()}>
        <Button title="Account Details Details" onPress={pressnext} color ='blue' />
    </PrimaryButton>
  );
}
export default AccountDetails;
