import React from "react";
import { View, Text, StyleSheet, } from "react-native";

const StudentsScreen = () => {
    return (
        <View> 
         <Text style={styles.Text}>Students Screen</Text></View>
    );
};

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    }
});

export default StudentsScreen;