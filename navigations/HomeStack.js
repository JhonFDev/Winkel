import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AddShop from '../screens/shop/AddShop';

//mis imports
import Home from '../screens/shop/Home';

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
        <Stack.Screen
            name='add-shop'
            component={AddShop}
            options={{
                title:"Shop en Stack"
            }}
        />
    </Stack.Navigator>
    
  )
}