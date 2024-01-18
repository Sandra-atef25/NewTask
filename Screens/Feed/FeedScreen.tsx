import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import Welcome from "../../Components/WelcomeScreen";
function FeedScreen({ navigation }) {
  const [entereddata, setentereddata] = useState("");
  function inputhandle(text) {
    setentereddata(text);
  }
  function onpresshandle() {
    navigation.navigate("FeedDetails", { Data: entereddata });
  }
  return (
    <Welcome>
       <Button title="Feed Details" onPress={onpresshandle} color="red" />
       <View style={styles.incon}>
        <Text style={styles.datauser}>Data:</Text>
        <TextInput
          placeholder="Enter Data"
          style={styles.datain}
          value={entereddata}
          onChangeText={inputhandle}
        />
      </View>
    </Welcome>
      
  );
}
export default FeedScreen;

const styles = StyleSheet.create({
  incon: {
    flexDirection: "row",
    alignItems: "center",
  },
  datain: {
    padding: 5,
    marginLeft: 5,
    borderWidth: 5,
    borderColor: "lightblue",
    opacity: 0.5,
    fontSize: 20,
    width: "50%",
  },
  datauser: {
    marginRight: 5,
    fontSize: 20,
  },
});
