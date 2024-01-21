import { TextInput, View, Button, Text, Alert } from "react-native";
import { useState,useContext } from "react";
import { UserName } from "../../Components/UsernameContext/UserContext";
import {styles} from "../../UIStyling/AuthenticationStyling/LoginAndRegisterStyling";
const LoginScreen=({ navigation }) =>{
  const [enteredName, setEnteredName] = useState("");
  const user=useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it 
 
  const pressHandler=()=> {
    if (enteredName.trim() === "") {Alert.alert("Invalid Name ", "Name must not be empty", [
      { text: "Okay", style: "destructive",},
    ]);
    return;
    }
    console.log("Pressed Login");
    user.nameOfUser=enteredName;
    navigation.navigate("MainStackTwo");
  };
  const pressHandleRegister=()=> {
    console.log("pressed Register");
    navigation.navigate("Register");
  };
  const inputHandler=(enterName:string)=> {
    setEnteredName(enterName);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.innercon}>
        <Text style={styles.textuser}>Name:</Text>
        <TextInput
          placeholder="UserName"
          style={styles.texti}
          value={enteredName}
          onChangeText={inputHandler}
        />
      </View>
      <View style={styles.innercon}>
        
        <View style={styles.buttonCon}>
          <Button
            title="Register"
            onPress={pressHandleRegister}
            color={"blue"}
          />
        </View>
        <View style={styles.buttonCon}>
          <Button title="Login" onPress={pressHandler} color={"blue"} />
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

