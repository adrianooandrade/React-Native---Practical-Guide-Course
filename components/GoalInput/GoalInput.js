import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      visible={props.openModalVisible}
      transparent={true}
      animationType={"slide"}
      style={styles.modal}
    >
      <View style={styles.actions}>
        <TextInput
          placeholder={"What are your goals in life?"}
          style={styles.textInput}
          placeholderTextColor="#ffffff"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>

        <View
          style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
        >
          <Button
            title={"Add goal"}
            onPress={addGoalHandler}
            color={"#4281A4"}
          ></Button>
          <Button
            title={"Cancel"}
            onPress={props.closeModalVisible}
            color={"#5E9DBF"}
          ></Button>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  actions: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#F8F7EE",
    padding: 20,
  },
  textInput: {
    borderRadius: 6,
    color: "#ffffff",
    backgroundColor: "#4281A4",
    minHeight: 38,
  },
});
