import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import StudentDetalis from "../components/StudentDetalis";

const StudentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students Screen</Text>

      <StudentDetalis
        name="YLL BERISHA"
        description="Programmer"
        image={require("../assets/avatar1.png")}
      />

      {/* GO TO PROFILE BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Profile", {
            name: "YLL BERISHA",
            image: require("../assets/avatar1.png"),
            description: "Programmer",
          })
        }
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StudentsScreen;