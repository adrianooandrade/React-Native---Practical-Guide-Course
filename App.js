import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    // or (recommended when the new data uses the previews data)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.actions}>
        <TextInput
          placeholder={"What are your goals in life?"}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title={"Add goal"} onPress={addGoalHandler}></Button>
      </View>
      <View style={{ flex: 10, gap: 8 }}>
        <ScrollView>
          <View style={{ flex: 1, gap: 8 }}>
            {courseGoals.map((goal) => (
              <View key={goal} style={styles.goalItem}>
                <Text style={{ color: "white" }}>{goal}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 40,
    gap: 10,
  },
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
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#2296f3",
    alignItems: "center",
  },
});
