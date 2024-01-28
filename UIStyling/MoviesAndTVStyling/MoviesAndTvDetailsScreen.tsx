import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',

    },
    NameofSelectedItem:{
        alignItems:'center',
        justifyContent:'center',
    },
    TextName:{
        fontSize:20,
        fontWeight:'bold',
    },
    Details:{
        justifyContent:'space-around',
        marginBottom:5,
        
    },
    headerButton:{
        flexDirection:'row',
        height:50,
        margin:5,
    
    },
    viewHeader:{
        flexGrow:30,
        marginRight:20,

    }
})
export default styles;