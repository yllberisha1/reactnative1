import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileScreen from "../screens/ProfileScreen";


const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <ProfileScreen name="YLL BERISHA" image={require('../assets/avatar1.png')} description="Programer"/>
            
        </View>
    );
};


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});


export default StudentsScreen;