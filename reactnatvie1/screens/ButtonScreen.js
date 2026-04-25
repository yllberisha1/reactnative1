import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
  let counter = 0;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Button Screen</Text>
      <Button
        title="Click me"
        color="black"
        onPress={() => console.log('button Clicked:', counter++)}
      />
      <TouchableOpacity
        style={styles.touchableBtn}
        onPress={() => console.log('touchableOpacity Clicked:', counter++)}
      >
        <Text style={styles.btnText}>Click Touchable Element</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  touchableBtn: {
    backgroundColor: '#000',
    marginVertical: 15,
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ButtonScreen
