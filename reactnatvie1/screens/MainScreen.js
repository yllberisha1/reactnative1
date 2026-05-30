import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Produkt')}
      >
        <Text style={styles.buttonText}>Produkt</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MainScreen;