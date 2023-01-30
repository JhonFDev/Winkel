import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//mis imports
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="accountstack"
        component={Account}
        options={{
          title: "Cuenta en Stack",
        }}
      />
      <Stack.Screen
        name="logintstack"
        component={Login}
        options={{
          title: "Inicio sesion en Stack",
        }}
      />
    </Stack.Navigator>
  );
}
