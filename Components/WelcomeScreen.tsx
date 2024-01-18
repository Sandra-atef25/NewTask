import { View, Text, StyleSheet } from "react-native";
import {ReactNode, useContext} from 'react';
import { UserName } from "./UsernameContext/UserContext";
function Welcome({ children }:{children:ReactNode}) {
    const user=useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {user.nameofuser}</Text>
      <View>{children}</View>
    </View>
  );
}
export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  },
});
