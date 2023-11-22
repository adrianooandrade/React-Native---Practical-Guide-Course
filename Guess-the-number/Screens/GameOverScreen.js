import { StyleSheet, View } from "react-native";
import Title from "../components/Title";

function GameOverScreen({ userNumber }) {
  return (
    <View style={styles.gameOverScreen}>
      <Title>{"Your number was"}</Title>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreen: {},
});
