import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    // or (recommended when the new data uses the previews data)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.actions}>
        <GoalInput onAddGoal={addGoalHandler}></GoalInput>
      </View>
      <View style={styles.items}>
        <FlatList
          data={courseGoals}
          contentContainerStyle={{ gap: 8 }}
          renderItem={(goalItem) => {
            return <GoalItem text={goalItem.item.text}></GoalItem>;
          }}
        ></FlatList>
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
  },
  items: { flex: 10, gap: 8 },
});
