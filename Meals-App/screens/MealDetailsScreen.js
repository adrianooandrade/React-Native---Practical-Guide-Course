import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { Ionicons } from "@expo/vector-icons";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <Pressable
              onPress={headerButtonPressHandler}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Ionicons name="star" size={24} color="white"></Ionicons>
            </Pressable>
          </View>
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Ingredients</Text>
        <View style={styles.listContainer}>
          {selectedMeal.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              <Text style={{ fontWeight: "bold" }}> {"\u2022"} </Text>
              {ingredient}
            </Text>
          ))}
        </View>
        <Text style={styles.subtitle}>Steps</Text>
        <View style={styles.listContainer}>
          {selectedMeal.steps.map((step, index) => (
            <Text key={index} style={styles.listItem}>
              <Text style={{ fontWeight: "bold" }}>{index + 1}.</Text> {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    borderBottomWidth: 2,
    width: " 100%",
    textAlign: "center",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  listItem: {
    marginVertical: 5,
  },
  rootContainer: {
    marginBottom: 24,
  },
  pressed: { opacity: 0.7 },
});

export default MealDetailsScreen;
