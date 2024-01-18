import { TextInput, View, Button, Text, StyleSheet, Alert } from "react-native";
import { useState,useContext } from "react";
import { UserName } from "../../Components/UsernameContext/UserContext";
function LoginScreen({ navigation }) {
  const [enteredname, setenteredname] = useState("");
  const user=useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it 
 
  function PressHandler() {
    if (enteredname.trim() === "") {Alert.alert("Invalid Name ", "Name must not be empty", [
      { text: "Okay", style: "destructive",},
    ]);
    return;
    }
    console.log("Pressed Login");
    user.nameofuser=enteredname;
    navigation.navigate("MainStackTwo");
  }
  function PressHandleregister() {
    console.log("pressed Register");
    navigation.navigate("Register");
  }
  function inputHandler(entername:string) {
    setenteredname(entername);
  }
  return (
    <View style={styles.Container}>
      <View style={styles.innercon}>
        <Text style={styles.textuser}>Name:</Text>
        <TextInput
          placeholder="UserName"
          style={styles.texti}
          value={enteredname}
          onChangeText={inputHandler}
        />
      </View>
      <View style={styles.innercon}>
        
        <View style={styles.buttonCon}>
          <Button
            title="Register"
            onPress={PressHandleregister}
            color={"blue"}
          />
        </View>
        <View style={styles.buttonCon}>
          <Button title="Login" onPress={PressHandler} color={"blue"} />
        </View>
      </View>
    </View>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: "50%",
    alignItems: "center",
  },
  innercon: {
    flexDirection: "row",
    alignItems: "center",
  },
  texti: {
    padding: 5,
    marginLeft: 5,
    borderWidth: 5,
    borderColor: "lightblue",
    opacity: 0.5,
    fontSize: 20,
    width: "50%",
  },
  textuser: {
    marginRight: 5,
    fontSize: 20,
  },
  buttonCon: {
    flex: 1,
    padding: 16,
  },
});
