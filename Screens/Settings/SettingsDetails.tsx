import { Button } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
const SettingsDetails=({ navigation }) =>{
  const pressLogOut=() =>{
    navigation.navigate("Login");
  };
  const pressGoBack=()=> {
    navigation.goBack();
  };
  return (
    <PrimaryButton onPress={pressGoBack}>
      <Button title="Log Out" onPress={pressLogOut} color='blue' />
    </PrimaryButton>
  );
};
export default SettingsDetails;
