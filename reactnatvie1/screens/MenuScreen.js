import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import StudentDetalis from '../components/StudentDetalis';

const MenuScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Menu Screen</Text>
      <Button title="Go to Screen" color="black" onPress={() => props.navigation.navigate('Button')} />

      <TouchableOpacity onPress={() => props.navigation.navigate('Students')} style={styles.btn}>
        <Text style={styles.btnText}>Go to Students Screen</Text>
      </TouchableOpacity>

      <StudentDetalis
        name="YLL BERISHA"
        description="Programmer"
        image={require('../assets/avatar1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  Text: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#000',
    marginVertical: 10,
    paddingVertical: 10,
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default MenuScreen;