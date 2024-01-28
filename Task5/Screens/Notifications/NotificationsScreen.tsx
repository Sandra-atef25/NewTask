import { Button} from "react-native";
import Welcome from "../../Components/WelcomeScreen";
const NotificationsScreen=({ navigation })=> {
  const onPresshandle=()=> {
    navigation.navigate("NotificationsDetails");
  };
  return (
    <Welcome>
        <Button
          title="Notifications Details"
          onPress={onPresshandle}
          color="red"
        />
     </Welcome>
  );
};
export default NotificationsScreen;

