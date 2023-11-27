import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"Meals Categories"}
            component={CategoriesScreen}
          ></Stack.Screen>
          <Stack.Screen
            name={"Meals Overview"}
            component={MealsOverviewScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
