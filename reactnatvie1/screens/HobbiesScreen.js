import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const students = [
    { id: 1, hobby: "Football" },
    { id: 2, hobby: "Reading" },
    { id: 3, hobby: "Traveling" },
    { id: 4, hobby: "Cooking" },
];

const HobbiesScreen = () => {
    return (
        <View style={styles.container}> 
        <Text>Hobbies</Text>
        <FlatList style={styles.FlatList}
            data={students}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student=> student.name}
            renderItem={({item}) => {
                return (
                    <Text style={styles.studentWrapper}> {item.hobby} </Text>
                );
            }}
        />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff' 
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    studentWrapper: {
        fontSize: 20,
        marginBottom: 20,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',   
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: 300,
    },

});

export default HobbiesScreen;


    

