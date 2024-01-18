import { Dimensions, StyleSheet } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moviesContainer: {
        flex: 2,
        alignContent: 'center'
    },
    ItemContainer: {
        flex: 1,
        borderWidth: 2,
        alignContent: "center",
    },
    ItemsContainers: {
        padding: 6
    },
    Itemtext: {
        fontSize: 14,
        fontWeight: 'bold',

    },
    ViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    TextContainer: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextMoviesContainer: {
        flex: 1,
        margin: 5,
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: deviceWidth / 2.5,
        backgroundColor: 'pink',
        borderWidth: 2,
        opacity: 0.75

    },
    searchbar: {
        margin: 15,
        borderWidth: 2,
        borderRadius: 25,
        width: '90%',
        flexDirection: 'row'
    },
    textin: {
        marginLeft: 10,
    },
    icon: {
        marginLeft: 5,
    }



});
export default styles;