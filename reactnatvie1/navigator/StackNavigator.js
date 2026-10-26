import React from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";
import Home from "screens/Home";
import About from "screens/About";


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "orange",
    },
}


const MainStackNavigator = ({navigation})=>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    );
}


export default MainStackNavigator;