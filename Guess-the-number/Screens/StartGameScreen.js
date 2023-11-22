import { Alert, StyleSheet, TextInput, View } from "react-native";

import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { Colors } from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const currentNumber = Number(enteredNumber);

    if (isNaN(currentNumber) || currentNumber <= 0 || currentNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Input has to be a number between 0 and 99",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }],
      );

      return "";
    } else {
      onPickNumber(currentNumber);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numInput}
        maxLength={2}
        inputMode={"numeric"}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      ></TextInput>
      <View style={styles.actionsContainer}>
        <View style={styles.action}>
          <CustomButton onPressButton={resetInputHandler}>Reset</CustomButton>
        </View>
        <View style={styles.action}>
          <CustomButton onPressButton={confirmInputHandler}>
            Confirm
          </CustomButton>
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
    borderBottomColor: Colors.primary500,
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
