import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisibility] = useState(false);

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    // or (recommended when the new data uses the previews data)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);

    endAddGoalHandler();
  }

  function startAddGoalHandler() {
    setModalVisibility(true);
  }

  function endAddGoalHandler() {
    setModalVisibility(false);
  }

  const deleteItemHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <>
      <StatusBar style={"auto"}></StatusBar>
      <View style={styles.appContainer}>
        <Button
          title={"Add new goal"}
          onPress={startAddGoalHandler}
          color={"#4281A4"}
        ></Button>
        <View style={styles.actions}>
          <GoalInput
            openModalVisible={modalIsVisible}
            closeModalVisible={endAddGoalHandler}
            onAddGoal={addGoalHandler}
          ></GoalInput>
        </View>
        <View style={styles.items}>
          <FlatList
            data={courseGoals}
            contentContainerStyle={{ gap: 8 }}
            renderItem={(goalItem) => {
              return (
                <GoalItem
                  text={goalItem.item.text}
                  id={goalItem.item.key}
                  onPressItem={deleteItemHandler}
                ></GoalItem>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
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
