import { StyleSheet, Text, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.gameScreen}>
      <Text style={styles.title}>{"Computed Guess"}</Text>
      <View>
        <Text>{"Height or Lower?"}</Text>
      </View>
      <View>
        <Text>{"Log Rounds"}</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
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
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    padding: 18,
  },
});
