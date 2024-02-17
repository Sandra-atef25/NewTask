import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors/Colors";
import { deviceWidth } from "../../../theme/dimensions/Dimensions";
export const styles = StyleSheet.create({
    ViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    CardContainer: {
        height: 250,
        width: deviceWidth / 2.15,
        backgroundColor:Colors.gray,
        borderTopWidth: 2,
        borderRadius: 10,
        opacity: 0.75

    },
   
})