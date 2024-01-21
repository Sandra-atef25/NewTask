import { Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";
const AccountScreen=({ navigation }) =>{
  const onPressHandle =()=> {
    navigation.navigate("AccountDetails");
  };
  return (
    <Welcome>
      <Button title="Account Details" onPress={onPressHandle} color="red" />
    </Welcome>
  );
};
export default AccountScreen;

