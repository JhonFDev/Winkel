import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='homestack'
            component={Home}
            options={{
                title:"Inicio en Stack"
            }}
        />
    </Stack.Navigator>
    
  )
}