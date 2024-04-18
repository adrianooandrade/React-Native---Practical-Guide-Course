import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ title, imageURL, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.image}></Image>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: { width: "100%", height: 200 },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
