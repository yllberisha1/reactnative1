import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import StudentDetalis from '../components/StudentDetalis';

const MenuScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.Text}>Menu Screen</Text>
      <Button title='Go to Screen' color='black' onPress={() => props.navigation.navigate('Button')} />

      <TouchableOpacity onPress={() => props.navigation.navigate('Students')} style={styles.btn}>
        <Text style={styles.btnText}>Go to Students Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Posts')} style={styles.btn}>
        <Text style={styles.btnText}>Go to Posts Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Album')} style={styles.btn}>
        <Text style={styles.btnText}>Go to Album Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Produkt')} style={styles.btn}>
        <Text style={styles.btnText}>Go to Produkt</Text>
      </TouchableOpacity>

      <View style={styles.profileCard}>
        <StudentDetalis
          name='YLL BERISHA'
          description='Programmer'
          image={require('../assets/avatar1.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  profileCard: {
    marginTop: 20,
    borderRadius: 14,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default MenuScreen;
