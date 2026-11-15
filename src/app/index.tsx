import { ScrollView, View } from "react-native";

import InfoCard from "../../components/InfoCard";
import ProfileHeader from "../../components/ProfileHeader";
import styles from "../../styles/styles";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <InfoCard title="Student Information" text="BSIT 3C" />

        <InfoCard
          title="Course"
          text="Bachelor of Science in Information Technology"
        />

        <InfoCard title="School" text="Northwest Samar State University" />

        <InfoCard title="Status" text="Currently Enrolled" />
      </View>
    </ScrollView>
  );
}
