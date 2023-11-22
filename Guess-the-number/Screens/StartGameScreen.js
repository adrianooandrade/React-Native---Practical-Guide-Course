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
      <View style={styles.actionsContainer}>
        <View style={styles.action}>
          <CustomButton>Reset</CustomButton>
        </View>
        <View style={styles.action}>
          <CustomButton>Confirm</CustomButton>
        </View>
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
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  numInput: {
    alignSelf: "center",
    minHeight: 50,
    fontSize: 32,
    borderBottomColor: "#fffc4b",
    borderBottomWidth: 2,
    color: "#000000",
    margin: 8,
    maxWidth: 50,
    textAlign: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  action: {
    flex: 1,
  },
});
