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
        alignItems:'center',
        width:deviceWidth,
    },
    ItemContainer: {
        flex: 1,
        padding:5,
        borderBottomWidth:2,
        justifyContent:'space-evenly',
        alignContent: "center",
    },
    ItemsContainers: {
        margin:5
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
        
        alignItems: 'center',
        justifyContent: 'center',

    },
    TextMoviesContainer: {
        flex: 1,
        padding:5,
        height: 200,
        width:deviceWidth/2.25,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        borderWidth: 2,
        opacity: 0.75

    },
    textin: {
        width:'100%',
        marginLeft: 5,
        flexDirection:'row',
        flex:1,
    },
    icon: {
        marginLeft: 5,
    },
    textUnclicked: {
        padding: 10,
        marginVertical:10,
        marginHorizontal: 15,
        flexDirection: "row",
        //width: deviceWidth-5,
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      textClicked: {
        marginHorizontal:20,
        marginVertical:10,
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent:'space-between'
      },
    



});
export default styles;