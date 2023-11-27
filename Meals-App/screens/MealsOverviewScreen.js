import { Platform, StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen() {
  return (
    <View>
      <Text> Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    minHeight: 120,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
