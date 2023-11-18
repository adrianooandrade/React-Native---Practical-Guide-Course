import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View>
      <Pressable onPress={props.onPressItem.bind(this, props.id)}>
        <View style={styles.goalItem}>
          <Text style={{ color: "white" }}>{props.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#2296f3",
    alignItems: "center",
    minHeight: 32,
    justifyContent: "center",
  },
});
