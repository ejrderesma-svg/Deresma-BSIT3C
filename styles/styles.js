import { Text, View } from "react-native";
import styles from "./styles";

export default function InfoCard({ title, text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}
