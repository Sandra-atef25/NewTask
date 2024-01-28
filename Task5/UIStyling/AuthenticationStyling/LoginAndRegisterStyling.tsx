import { StyleSheet,Dimensions } from "react-native";
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",

    },
    innercon: {
        flexDirection: "row",
        alignItems: "center",
        //justifyContent:"center"
    },
    texti: {
        padding:5,
        marginLeft: 5,
        borderWidth: 2,
        borderColor: "black",
        fontSize: 20,
        width:'70%'
    },
    textuser: {
        marginRight: 5,
        fontSize: 20,
        fontWeight:'bold'
    },
    buttonCon: {
        flex: 1,
        padding: 16,
    
    },
});
