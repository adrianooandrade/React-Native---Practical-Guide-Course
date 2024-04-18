import { FlatList, StyleSheet, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  function renderMealItem(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageURL={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
      ></MealItem>
    );
  }

  return (
    <View style={styles.gridItem}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    minHeight: 120,
    borderRadius: 8,
  },
});
