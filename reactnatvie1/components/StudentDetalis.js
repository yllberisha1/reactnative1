import React from "react";
import { Text, Image, View, StyleSheet } from "react-native-web";  

const StudentDetalis = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>    
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     cardWrapper: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius:8,
        alignSelf: 'center',
        marginBottom: 15

     },
        img: {
              width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopLeftRadius: 8

        }
       

     
});

export default StudentDetalis;