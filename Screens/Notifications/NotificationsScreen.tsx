import { Button} from "react-native";
import Welcome from "../../Components/WelcomeScreen";
function NotificationsScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("NotificationsDetails");
  }
  return (
    <Welcome>
        <Button
          title="Notifications Details"
          onPress={onpresshandle}
          color="red"
        />
     </Welcome>
  );
}
export default NotificationsScreen;

