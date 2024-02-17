import PrimaryButton from "../../../../../components/atoms/PrimaryButton";
import Welcome from "../../../../../components/molecules/WelcomeScreen";
import { Colors } from "../../../../../theme/colors/Colors";
import { useButtonPressHandle } from "../../hooks/HandleButtonPress";
const SettingsView = () => {
    const {onPressHandle}=useButtonPressHandle()
  return (

    <Welcome>
      <PrimaryButton name="Settings Details" onPress={onPressHandle} color={Colors.red} />
    </Welcome>
  );
};
export default SettingsView;
