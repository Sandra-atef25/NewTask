import { TextInput, View, Button, Text, StyleSheet, Alert } from "react-native";
import { useContext, useState } from "react";
import { styles } from "../../UIStyling/AuthenticationStyling/LoginAndRegisterStyling";
import { UserName } from "../../Components/UsernameContext/UserContext";
const RegisterScreen=({ navigation }) =>{
  //const navigation = useNavigation();
  const [enteredName, setEnteredName] = useState("");
  const user=useContext(UserName);//pass object used to create context in usecontext to be able to use all the things provided in it 
 
  const pressHandler=()=> {
    if (enteredName.trim() === "") {
      Alert.alert("Invalid Name ", "Name must not be empty", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    user.nameOfUser=enteredName;
    navigation.navigate("MainStackTwo");
  };
  const pressGoBackLogin=()=> {
    console.log("pressed goback login");
    navigation.navigate("Login");
  };
  const inputHandler=(enterName) =>{
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
          <Button title="Register" onPress={pressHandler} color={"blue"} />
        </View>
        <View style={styles.buttonCon}>
          <Button title="Back" onPress={pressGoBackLogin} color={"blue"} />
        </View>
      </View>
    </View>
  );
};
export default RegisterScreen;
