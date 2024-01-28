import { Button } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
const NotificationsDetails=({ navigation }) =>{
  const pressgoBack=() =>{
    navigation.goBack();
  };
  const pressNext=() =>{
    navigation.navigate("AccountDetails");
  };
  return (
    <PrimaryButton onPress={pressgoBack}>
      <Button title="Account Details" onPress={pressNext} color='blue'/>
    </PrimaryButton>
  );
};
export default NotificationsDetails;
