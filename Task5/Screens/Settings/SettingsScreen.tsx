import { Button } from "react-native";
import Welcome from "../../Components/WelcomeScreen";
const SettingsScreen=({ navigation }) =>{
  const onPressHandle=() =>{
    navigation.navigate("SettingsDetails");
  };

  return (
    <Welcome>
      <Button title="Settings Details" onPress={onPressHandle} color="red" />
    </Welcome>
  );
};
export default SettingsScreen;
