import { Button, Text, View } from "react-native";

export default function RecipeListScreen({ navigation }) {
  const recipes = [
    { id: "1", name: "Chicken Adobo" },
    { id: "2", name: "Pancakes" },
    { id: "3", name: "Spaghetti" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Recipes</Text>

      {recipes.map((recipe) => (
        <View key={recipe.id}>
          <Text>{recipe.name}</Text>

          <Button
            title="View Recipe"
            onPress={() => navigation.navigate("Details", { recipe })}
          />
        </View>
      ))}
    </View>
  );
}
