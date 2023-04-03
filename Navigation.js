import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails';



const Stack = createNativeStackNavigator();
export default function Navigation() {
    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}