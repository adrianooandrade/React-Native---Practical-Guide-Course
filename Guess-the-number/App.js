import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { useState } from "react";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import GameOverScreen from "./Screens/GameOverScreen";
import Title from "./components/Title";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function guessedNumberHandler() {
    setGameIsOver(true);
  }

  let screen = (
    <StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>
  );

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGuessedNumber={guessedNumberHandler}
      ></GameScreen>
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen></GameOverScreen>;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/8-FyhWUsTF8OTcdJF.png")}
          resizeMode={"cover"}
          style={styles.imageContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                margin: 28,
                borderRadius: 8,
                marginTop: 50,
              }}
            >
              <Title label={"Guess the number"}></Title>
            </View>

            <View style={styles.overlayContainer}>{screen}</View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFED6",
    alignItems: "stretch",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    opacity: 0.16,
  },
});
