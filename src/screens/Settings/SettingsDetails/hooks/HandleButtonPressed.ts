import { useNavigation } from "@react-navigation/native";
import { SettingsStackNavigation } from "../../../../navigationcontainer/stacks/mediastack/SettingsStack";
import { AuthenticationStackNavigation } from "../../../../navigationcontainer/stacks/authenticationstack";
export const useButtonsPressHandle = () => {
  const nav = useNavigation<AuthenticationStackNavigation>();
  const navigation = useNavigation<SettingsStackNavigation>();
  const pressLogOut = () => {
    nav.navigate("Login");
  };
  const pressGoBack = () => {
    navigation.goBack();
  };
  return {
    pressLogOut,
    pressGoBack
  };
};
