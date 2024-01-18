import { ReactNode } from "react";
import { Button, View, StyleSheet, GestureResponderEvent } from "react-native";
type propsbutton={
  children:ReactNode,
  onPress?( event:GestureResponderEvent) :void,
}
function PrimaryButton(props:propsbutton) {
  return (
    <View style={styles.container}>
      <View style={styles.buttoncon}>{props.children}</View>
      <View style={styles.buttoncon}>
        <Button title="Back" onPress={props.onPress} color="blue" />
      </View>
    </View>
  );
}
export default PrimaryButton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttoncon: {
    padding: 16,
  },
});
