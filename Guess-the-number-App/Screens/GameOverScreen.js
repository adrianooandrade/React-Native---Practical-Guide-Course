import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={styles.gameOverScreen}>
      <View style={{ margin: 12 }}>
        <Title label={"Your number was:"}></Title>
        <Text style={{ textAlign: "center", fontSize: 42, fontWeight: "bold" }}>
          {userNumber}
        </Text>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
          padding: 30,
        }}
      >
        {"You must drink " + Math.ceil(roundsNumber / 2) + " sips"}
      </Text>

      <CustomButton onPressButton={onStartNewGame}>Restart</CustomButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreen: {
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
});
