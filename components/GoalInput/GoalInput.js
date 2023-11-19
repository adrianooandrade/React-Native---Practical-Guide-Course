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
    <Modal visible={props.openModalVisible} animationType={"slide"}>
      <View style={styles.actions}>
        <TextInput
          placeholder={"What are your goals in life?"}
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <Button title={"Add goal"} onPress={addGoalHandler}></Button>
        <Button title={"Cancel"} onPress={props.closeModalVisible}></Button>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  actions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#cccccc",
    minHeight: 38,
    margin: 4,
  },
});
