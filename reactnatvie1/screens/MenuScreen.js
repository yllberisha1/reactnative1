import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
  return (
    <View>
      <Text style={styles.Text}>Menu Screen</Text>
      <Button title="Go to Screen" color="black" onPress={() => props.navigation.navigate('Button')} />
    
    <TouchableOpacity onPress={() => props.navigation.navigate('Students')}
      style={styles.btn}>
      <Text style={styles.btnText}>Go to Students Screen</Text>
    </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
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
}
});

export default MenuScreen;