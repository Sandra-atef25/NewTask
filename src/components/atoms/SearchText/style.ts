import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors/Colors";
export const styles = StyleSheet.create({
    textClicked: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        flexDirection: "row",
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems:'center',
        height:70,
    },
    textin: {
        marginLeft: 5,
        width: '65%',
        //flexDirection: 'row',
        //flex: 1,
    },
    icon: {
        marginLeft: 5,
        alignContent:'center'
    },
})