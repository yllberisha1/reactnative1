import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const StudentDetalis = (props) => {
  return (
    <View style={styles.cardWrapper}>
      <Image source={props.image} style={styles.img} />
      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    marginBottom: 15,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  infoWrapper: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#555',
  },
});

export default StudentDetalis;