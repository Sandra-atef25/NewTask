import { View } from "react-native";
import PrimaryButton from "../../../../../components/atoms/PrimaryButton";
import { Colors } from "../../../../../theme/colors/Colors";
import { styles } from "./style";
import { useButtonsPressHandle } from "../../hooks/HandleButtonPressed";
const Buttons = () => {
    const { pressGoBack, pressLogOut } = useButtonsPressHandle();
    return (
        <View style={styles.Container}>
            <PrimaryButton onPress={pressGoBack} color="blue" name="Back" />
            <PrimaryButton onPress={pressLogOut} color={Colors.red} name="Log Out" />
        </View>
    );
};
export default Buttons;
