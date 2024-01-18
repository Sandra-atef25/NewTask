import { View, TextInput, Button, StyleSheet, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons"
/*const SearchBarComp=({searchvalue,setsearchvalue}:{searchvalue:string,setsearchvalue:Function})=>{
    return (
        <View>
            <View>
            <Ionicons name="search" color={"blue"} size={20} style={styles.icons}/>
            <TextInput value={searchvalue} onChangeText={setsearchvalue} placeholder="Search" style={styles.textin} >
                 
            </TextInput>
            </View>
        </View>
    );
};
export default SearchBarComp;
const styles = StyleSheet.create({
    icons:{
        marginLeft:2,
    },
    textin:{
        fontSize: 20,
    marginLeft: 10,
    width: "90%",
    }
})*/
export const SearchBarComp = ({ searchtext, setsearchtext}:{searchtext:string,setsearchtext:any}) => {
   return( <View style={styles.container}>
        <View>
            {/* search Icon */}
            <Ionicons
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1,width:"10%" }}
            />
            {/* Input field */}
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchtext}
                onChangeText={setsearchtext}
            />
        </View>
       
    </View>
   );
};

export default SearchBarComp;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderWidth:2,
        backgroundColor:'lightpurple',
        borderCurve:"circular",
        borderRadius:26,
        alignItems: "center",
        flexDirection:'row',

    },
    input: {
       
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});