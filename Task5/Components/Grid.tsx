import { Pressable, View, Text, StyleSheet } from "react-native";
function Grid({ title, id, onPress }) {
  return (
    <View style={{flex:1}}>
      <Pressable  android_ripple={{color:'#ccc'}} style={({pressed})=>pressed?[styles.buttpressed,{borderWidth:3,borderColor:'red'}]:null} onTouchEnd={onPress}>
        <View style={styles.innercon}>
        <Text style={styles.titlef}>Id:<Text style={{fontWeight:'bold',color:'black'}}>{id}</Text></Text>
        <Text style={styles.titlef}>Name:<Text style={{fontWeight:'bold',color:'black'}}>{title}</Text></Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Grid;
const styles = StyleSheet.create({
    
    titlef:{
        fontSize:20,
        color:'red',
        fontWeight:'bold'
    },
    buttpressed:{
        opacity:0.5,
    },
    innercon:{
        padding:16,
        justifyContent:'center',
        alignItems:'center',
    },
})
