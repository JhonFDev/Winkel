import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import React from "react";

//mis imports
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  //agregar iconos a los tab.
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "home":
        iconName = "home-circle-outline";
        break;
      case "account":
        iconName = "account-circle-outline";
        break;
    }
    return (
      <Icon type="material-community" name={iconName} size={30} color={color} />
    );
  };
  //finaliza el agregar iconos a los tab.

  // retorna navegacion por tabs.
  return (
    <NavigationContainer>
      <Tab.Navigator
      //opciones para cada tab.
        initialRouteName="account"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "rebeccapurple",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
        // finaliza opciones para cada tab.
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Inicio en Tab" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Perfil en Tab" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    //finaliza el retorno navegacion por tabs.
  );
}
