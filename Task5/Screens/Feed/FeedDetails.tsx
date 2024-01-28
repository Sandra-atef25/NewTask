import { StyleSheet, View, Text } from "react-native";
import PrimaryButton from "../../Components/PrimaryButton";
function FeedDetails({ navigation, route }) {
  const data = route?.params?.Data;
  function pressgoback() {
    navigation.goBack();
  }
  return (
    <PrimaryButton onPress={pressgoback}>
      <Text style={styles.textin}>The Entered Data is {data}</Text>
    </PrimaryButton>
  );
}
export default FeedDetails;
const styles = StyleSheet.create({
  
  textin: {
    padding: 16,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
