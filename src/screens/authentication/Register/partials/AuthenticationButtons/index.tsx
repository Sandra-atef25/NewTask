import { View, } from "react-native";
import PrimaryButton from "../../../../../components/atoms/PrimaryButton";
import { Colors } from "../../../../../theme/colors/Colors";
import { authButtonsProps } from "./interface/interface";
import { styles } from "./style";
const AuthenticationButtons = ({ handleRegister, pressHandler }:authButtonsProps) => {
    return (
        <View style={styles.innercon}>
            <PrimaryButton color={Colors.green} name="Register" onPress={handleRegister} />
            <PrimaryButton color={Colors.green} name="Back" onPress={pressHandler} />
        </View>
    );
};
export default AuthenticationButtons;