import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28 }}>Recipe Finder</Text>

      <Text>Find your favorite recipes!</Text>

      <Button
        title="Browse Recipes"
        onPress={() => navigation.navigate("Recipes")}
      />
    </View>
  );
}
