import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";

import { Dimensions, StyleSheet, View } from "react-native";
const Gradient =({children}:{children:ReactNode})=>{
    return (
        <View>
            <LinearGradient colors={['#94bbe9','#eeaeca']} style={styles.container}>
                {children}
            </LinearGradient>
        </View>
    )

}
export default Gradient;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        width:Dimensions.get("window").width,
    }
})