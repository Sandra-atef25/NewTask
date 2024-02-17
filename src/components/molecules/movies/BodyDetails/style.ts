import { StyleSheet } from "react-native";
import { Colors } from "../../../../theme/colors/Colors";
export const styles = StyleSheet.create({
  GenresContainer: {
    flexDirection: "row"
  },
  GenreName: {
    padding: 3,
    color: Colors.white,
    fontSize: 16
  },
  GenreIndicator: {
    color: Colors.red,
    fontWeight: "bold",
    fontSize: 20
  }
});
