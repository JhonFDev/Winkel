import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

//mis imports
import AccountStack from './AccountStack'
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen
                    name='home'
                    component={HomeStack}
                    options={{title: "Inicio en Tab"}}
                />
                <Tab.Screen
                    name='account'
                    component={AccountStack}
                    options={{title: "Perfil en Tab"}}
                />
            </Tab.Navigator>
    </NavigationContainer>
  )
}