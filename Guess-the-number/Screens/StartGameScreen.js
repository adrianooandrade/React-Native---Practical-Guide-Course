import { StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numInput}
        maxLength={2}
        inputMode={"numeric"}
      ></TextInput>
      <View>
        <CustomButton>Reset</CustomButton>
        <CustomButton>Confirm</CustomButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

// Elevation for Android shadowColor/Offset/Opacity for IOS
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 8,
    padding: 16,
    margin: 32,
    backgroundColor: "#addee2",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  numInput: {
    minHeight: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    margin: 8,
    maxWidth: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
