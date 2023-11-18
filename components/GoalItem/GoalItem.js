import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={{ borderRadius: 6, backgroundColor: "#2296f3" }}>
      <Pressable
        android_ripple={{ color: "0064F3" }}
        style={(pressedData) => {
          return pressedData.pressed ? styles.pressedItem : null;
        }}
        onPress={props.onPressItem.bind(this, props.id)}
      >
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
    alignItems: "center",
    minHeight: 32,
    justifyContent: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
