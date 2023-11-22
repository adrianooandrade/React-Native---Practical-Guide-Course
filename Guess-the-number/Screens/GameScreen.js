import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import { Colors } from "../constants/colors";
import CustomButton from "../components/CustomButton";

function GameScreen({ userNumber }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(0, 100, userNumber),
  );
  function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }

    return randomNum;
  }

  return (
    <View style={styles.gameScreen}>
      <Title label={"Computed Guess"}></Title>
      <Text style={styles.text}>{currentGuess.toString()}</Text>
      <View style={styles.actionContainer}>
        <Text>{"Height or Lower?"}</Text>
        <View style={{ gap: 8 }}>
          <CustomButton>+</CustomButton>
          <CustomButton>-</CustomButton>
        </View>
      </View>
      <View style={styles.logContainer}>
        <Text>{"Log"}</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
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
  text: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.primary600,
    padding: 24,
    textAlign: "center",
  },
  actionContainer: {},
  logContainer: {},
});
