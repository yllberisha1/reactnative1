import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native-web";

const ProfileScreen = ({ navigation, props }) => {
  return (
    <View style={styles.container}>

      {/* TOP IMAGE */}
      <View style={styles.top}>
        <Image source={props.image} style={styles.img} />
      </View>

      {/* BOTTOM CONTENT */}
      <View style={styles.bottom}>

        <View style={styles.card}>
          <Text style={styles.name}>{props.name}</Text>

          <Text style={styles.description} numberOfLines={3}>
            {props.description}
          </Text>

          {/* NAV BUTTON */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Projects")}
          >
            <Text style={styles.buttonText}>See All Projects</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },

  bottom: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  img: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },

  card: {
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#111",
    paddingVertical: 12,
    borderRadius: 25,
    paddingHorizontal: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProfileScreen;