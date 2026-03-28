import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Touchable } from "react-native";

const ButtonScreen = () => {
    let counter = 0;
    return (
     <View>
        <Text style={StyleSheet.textStyle}>Button Screen</Text>
        <Button title="click me"
              color="purple"
              onPress={() => console.log('button Clicked:', counter++)}
              />
              <TouchableOpacity style={styles.TouchableOpacity}
              onPress={()=> console.log("touchableOpacity Clicked:", counter++)}>
                <Text style={styles.btnText}>click touchable element</Text>
              </TouchableOpacity>
     </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        margintOP: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    touchableBtn: {
        backgroundColor:'purple',
        marginVertical: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 2

    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    }

})

export default ButtonScreen