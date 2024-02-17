import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors/Colors";
import { deviceWidth } from "../../../theme/dimensions/Dimensions";
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.black,
    },
    DataContainer: {
        flex:1,
        alignItems: 'center',
        width: deviceWidth,
    },
})