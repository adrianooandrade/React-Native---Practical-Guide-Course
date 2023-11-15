import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 8,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={"What are your goals in life?"}
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "#cccccc",
            minHeight: 38,
            margin: 4,
          }}
        ></TextInput>
        <Button title={"Add goal"}></Button>
      </View>
      <View style={{ flex: 10 }}>
        <Text>List of goals</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    margin: 40,
  },
});
