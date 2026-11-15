import { StyleSheet, Text, View } from "react-native";

export default function BookmarksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookmarks</Text>
      <Text>Your saved recipes will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F0",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
