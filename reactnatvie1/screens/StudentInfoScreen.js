import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StudentInfoScreen = () => { 
    const studentName = "yll";
    const studentBirthday = "09.11.2007";
    const studentSurname = "Berisha";
    const fullName = studentName + " "  + studentSurname;
    const studentCity = "Prishtina";
    return (
        <View>
            <Text>Name: {studentName}</Text>
            <Text>Surname: {studentSurname}</Text>
            <Text>FullName: {fullName}</Text>
            <Text>Birthday: {studentBirthday}</Text>
            <Text>City: {studentCity}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,            
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});  
export default StudentInfoScreen;