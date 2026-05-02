import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Pressable, TouchableOpacity, Alert, Platform } from 'react-native';

const StudentDetalis = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const name = props.name || 'Unknown Student';

  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.alert(`Student Selected: ${name}`);
    } else {
      Alert.alert('Student Selected', name);
    }
  };

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.cardWrapper, pressed && styles.cardPressed]}
      onPress={handlePress}
    >
      <Image source={props.image} style={styles.img} />
      <View style={styles.infoWrapper}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity onPress={toggleFavourite} style={styles.heartButton} activeOpacity={0.7}>
            <Text style={[styles.heart, isFavourite && styles.heartActive]}>{isFavourite ? '♥' : '♡'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </Pressable>
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
  cardPressed: {
    opacity: 0.85,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  heartButton: {
    padding: 6,
  },
  heart: {
    fontSize: 18,
    color: '#999',
  },
  heartActive: {
    color: '#e74c3c',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
  },
});

export default StudentDetalis;