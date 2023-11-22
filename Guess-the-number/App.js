import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";

export default function App() {
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
          <View style={styles.overlayContainer}>
            <StartGameScreen></StartGameScreen>
          </View>
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
