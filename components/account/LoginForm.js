import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, Icon, Input, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty } from "lodash"


import { validateEmail } from "../../utils/helpers";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doLogin = () => {
    if (!validateData()) {
      console.log("logueando" + formData.email)
      return;
    }
    alert("Hola " + formData.email + " has iniciado sesion con exito");
    navigation.navigate("home")
  } 

  const validateData = () => {
    setErrorEmail("");

    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("El correo ó");
      isValid = false;
    }
    if (isEmpty(formData.password)) {
      setErrorPassword("la contraseña son incorrectos")
      
    }
    
    

    return isValid;
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <Text style={styles.text}>Inicia sesion con Winkel</Text>
        <Text style={styles.texterrorEmail}>{errorEmail} {errorPassword}</Text>
        <Input
          containerStyle={styles.input}
          placeholder="Ingresa tu Correo"
          onChange={(e) => onChange(e, "email")}
          keyboardType="email-address"
          defaultValue={formData.email}
        />

        <Input
          containerStyle={styles.input}
          placeholder="Ingresa la contraseña"
          password={true}
          secureTextEntry={!showPassword}
          defaultValue={formData.password}
          onChange={(e) => onChange(e, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              iconStyle={styles.icono}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Button
          title="iniciar session"
          buttonStyle={styles.button}
          containerStyle={styles.btncontainer}
          onPress={() => doLogin()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const defaultFormValues = () => {
  return { email: "", password: "" };
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  icono: {
    color: "#c1c1c1",
  },
  btncontainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "rebeccapurple",
  },
  viewBody: {
    marginHorizontal: 30,
  },
  text: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
  },
  texterrorEmail:{
    marginBottom: 17,
    fontSize: 15,
    color:"red",
    alignSelf:"center",
    fontStyle:"italic",
    fontWeight:"600"
    
  }
});
