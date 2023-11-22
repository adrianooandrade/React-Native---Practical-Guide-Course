import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

function Title({ label }) {
  return <Text style={styles.title}>{label}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    padding: 18,
    color: Colors.primary600,
  },
});
