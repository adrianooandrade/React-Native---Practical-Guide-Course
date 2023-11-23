import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

let currentMin = 1;
let currentMax = 100;
function GameScreen({ userNumber, onGuessedNumber }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber),
  );
  const [guessRounds, setGuessRounds] = useState(0);
  const [guessRoundsLog, setGuessRoundsLog] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setGuessRoundsLog((previousLog) => [currentGuess, ...previousLog]);
    if (currentGuess === userNumber) {
      onGuessedNumber(guessRounds);
    }
  }, [currentGuess, userNumber, onGuessedNumber]);

  useEffect(() => {
    // with depedency array empty it will only run once at first render
    currentMin = 1;
    currentMax = 100;
  }, []);

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
      setGuessRounds(guessRounds + 1);
      Alert.alert(
        "You have to remember the number you choose",
        "This counts as an extra round 🤓☝️",
        [{ text: "Ok nerd", style: "cancel" }],
      );
      return;
    }

    if (direction === "lower") {
      currentMax = currentGuess;
    } else {
      currentMin = currentGuess + 1;
    }

    const newNum = generateRandomBetween(currentMin, currentMax, currentGuess);
    setGuessRounds(guessRounds + 1);
    setCurrentGuess(newNum);
  }

  const screenHeight = height;

  const renderItem = ({ item, index }) => (
    <View style={[styles.logItem, { gap: screenHeight < 400 ? 12 : 0 }]}>
      <Text style={{ fontWeight: "bold" }}>
        {"Round: " + (guessRoundsLog.length - 1 - index)}
      </Text>
      <Text style={{ fontWeight: "bold" }}>{"Guess: " + item}</Text>
    </View>
  );

  return (
    <View
      style={[
        styles.gameScreen,
        {
          margin: screenHeight < 400 ? 16 : 32,
          flexDirection: screenHeight < 400 ? "row" : "column",
          justifyContent: screenHeight < 400 ? "space-between" : "default",
          alignItems: screenHeight < 400 ? "center" : "stretch",
          gap: screenHeight < 400 ? 24 : 0,
        },
      ]}
    >
      <View style={{ margin: screenHeight < 400 ? 0 : 18 }}>
        <Title label={"Computed Guess"}></Title>
      </View>

      <Text
        style={[
          styles.textGuess,
          {
            padding: screenHeight < 400 ? 4 : 32,
            fontSize: screenHeight < 400 ? 22 : 32,
            flex: screenHeight < 400 ? 1 : 0,
          },
        ]}
      >
        {currentGuess.toString()}
      </Text>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>{"Height or Lower?"}</Text>
        <View style={{ gap: 20, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <CustomButton onPressButton={guessNextHandler.bind(null, "lower")}>
              <Ionicons name={"md-remove"} size={24}></Ionicons>
            </CustomButton>
          </View>
          <View style={{ flex: 1 }}>
            <CustomButton onPressButton={guessNextHandler.bind(null, "higher")}>
              <Ionicons name={"md-add"} size={24}></Ionicons>
            </CustomButton>
          </View>
        </View>
      </View>
      <View style={styles.logContainer}>
        <Text style={styles.text}>{"Log"}</Text>
        <View>
          <FlatList
            data={guessRoundsLog}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{
              maxHeight: screenHeight < 400 ? 100 : 200,
            }}
          ></FlatList>
        </View>
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
  logContainer: {
    gap: 8,
  },
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: Colors.primary500,
    margin: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: Colors.primary600,
    borderWidth: 2,
  },
});
