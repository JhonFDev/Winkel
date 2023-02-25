import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//mis imports
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";
import LoginForm from "../components/account/LoginForm";


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
        name="loginstack"
        component={Login}
        options={{
          title: "Inicio sesion en Stack",
        }}
      />
      <Stack.Screen
        name="registerstack"
        component={Register}
        options={{
          title: "Registarse en Stack",
        }}
      />
      <Stack.Screen
        name="loginformstack"
        component={LoginForm}
        options={{
          title: "iniciando sesion en Stack",
        }}
      />
      
    </Stack.Navigator>
  );
}
