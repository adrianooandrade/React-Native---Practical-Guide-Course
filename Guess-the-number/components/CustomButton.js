import { Pressable, StyleSheet, Text, View } from "react-native";

// Pressable is recommended as a substitute for Touchable
// Style pressed arrow function was added for IOs as android_ripple "replacement" with opacity as instead of a ripple
function CustomButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#fcd941" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    elevation: 2,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#fdf550",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
