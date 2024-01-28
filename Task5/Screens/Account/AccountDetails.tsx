import { Button } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
const AccountDetails=({ navigation }) =>{
  const pressNext=() =>{
    navigation.navigate("AccountDetailsDetails");
  };
  return(
    <PrimaryButton onPress={()=>navigation.goBack()}>
        <Button title="Account Details Details" onPress={pressNext} color ='blue' />
    </PrimaryButton>
  );
};
export default AccountDetails;
