import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const students = [
    {name: "bbbbb", surname: "aaaa", age: 20},
    {name: "eeee", surname: "ttttt", age: 22},
    {name: "rrrr", surname: "uuuuuu", age: 21},
    {name: "ddddd", surname: "vvvvvv", age: 19},
];

const ListScreen = () => {
    return (
        <View style={styles.container}> 
        <Text>List of Students</Text>
        <FlatList
            data={students}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student=> student.name}
            renderItem={({item}) => {
                return (
                    <Text style={styles.studentWrapper}>{item.name} {item.surname} - {item.age}</Text>
                );
            }}
        />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginRight: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: 300,
    },

});

export default ListScreen;


    