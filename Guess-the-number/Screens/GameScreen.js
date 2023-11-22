import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import CustomButton from "../components/CustomButton";

let currentMin = 1;
let currentMax = 100;

function GameScreen({ userNumber, onGuessedNumber }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber),
  );

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGuessedNumber();
    }
  }, [currentGuess, userNumber, onGuessedNumber]);

  function generateRandomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }

    return randomNum;
  }

  function guessNextHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Why are you lying?", "Spill it out", [
        { text: "Ok", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax = currentGuess;
    } else {
      currentMin = currentGuess + 1;
    }

    const newNum = generateRandomBetween(currentMin, currentMax, currentGuess);
    setCurrentGuess(newNum);
  }

  return (
    <View style={styles.gameScreen}>
      <Title label={"Computed Guess"}></Title>
      <Text style={styles.textGuess}>{currentGuess.toString()}</Text>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>{"Height or Lower?"}</Text>
        <View style={{ gap: 8, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <CustomButton onPressButton={guessNextHandler.bind(null, "lower")}>
              -
            </CustomButton>
          </View>
          <View style={{ flex: 1 }}>
            <CustomButton onPressButton={guessNextHandler.bind(null, "higher")}>
              +
            </CustomButton>
          </View>
        </View>
      </View>
      <View style={styles.logContainer}>
        <Text style={styles.text}>{"Log"}</Text>
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
  textGuess: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.primary600,
    padding: 24,
    fontSize: 28,
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
  actionContainer: {
    gap: 8,
  },
  logContainer: {},
});
