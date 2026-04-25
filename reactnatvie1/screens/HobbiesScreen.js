import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const hobbies = [
  { id: '1', hobby: 'Football' },
  { id: '2', hobby: 'Reading' },
  { id: '3', hobby: 'Traveling' },
  { id: '4', hobby: 'Cooking' },
];

const HobbiesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hobbies</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.hobbyCard}>
            <Text style={styles.hobbyText}>{item.hobby}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  hobbyCard: {
    backgroundColor: '#f0f0f0',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  hobbyText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HobbiesScreen;


    

