import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const ProjectsScreen = ({ navigation }) => {
  const projects = [
    {
      title: "E-commerce App",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Chat Application",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Blog App",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>All Projects</Text>
      <Text style={styles.subtitle}>Creative work & latest designs</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.backButtonText}>Back to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.backButtonText}>Back to Menu</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        {projects.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardBody}>
              <Text style={styles.projectTitle}>{item.title}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Open</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginTop: 4,
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 130,
  },

  cardBody: {
    padding: 12,
  },

  projectTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
    minHeight: 40,
  },

  backButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 18,
  },

  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProjectsScreen;