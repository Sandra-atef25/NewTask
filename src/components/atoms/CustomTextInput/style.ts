import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors/Colors";
export const styles = StyleSheet.create({
    innercon: {
        flexDirection: "row",
        alignItems: "center",
    },
    texti: {
        padding:5,
        marginLeft: 5,
        borderWidth: 2,
        borderColor: Colors.black,
        fontSize: 20,
        width:'70%'
    },
    textuser: {
        marginRight: 5,
        fontSize: 20,
        fontWeight:'bold'
    },
})
