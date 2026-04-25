import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const name = route?.params?.name || "JOHN DOE";
  const image = route?.params?.image || require('../assets/avatar1.png');
  const description =
    route?.params?.description ||
    "We're passionate about creating beautiful design for startups & leading brands";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Blue Header */}
      <View style={styles.header}>
        {image && <Image source={image} style={styles.avatar} />}
      </View>

      {/* White Card */}
      <View style={styles.card}>
        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <Text style={styles.role}>UI/UX Designer</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Projects")}
        >
          <Text style={styles.buttonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>

      {/* Projects Header */}
      <View style={styles.projectRow}>
        <Text style={styles.projectTitle}>PROJECTS</Text>

        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => navigation.navigate("Projects")}
        >
          <Text style={styles.smallButtonText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Project Cards */}
      <View style={styles.projectsContainer}>
        <View style={styles.projectCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
            }}
            style={styles.projectImage}
          />
        </View>

        <View style={styles.projectCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
            }}
            style={styles.projectImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "#6ec6e8",
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  card: {
    backgroundColor: "white",
    marginHorizontal: 25,
    marginTop: -40,
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
  },

  role: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },

  description: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 20,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },

  projectRow: {
    marginTop: 30,
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  projectTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  smallButton: {
    backgroundColor: '#000',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  smallButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  projectsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },

  projectCard: {
    width: "47%",
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
  },

  projectImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
});

export default ProfileScreen;