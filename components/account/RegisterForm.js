import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";

// mis imports
import { validateEmail } from "../../utils/helpers";
import Loading from "../Loading";
import LoginForm from "./LoginForm";
import { registerUser } from "../../utils/actions";

export default function RegisterForm() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState(defaultFormValues);
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const setFormDataOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doRegisterUser = () => {
    if (validateData()) {
     // alert("hola" + formData.username);
      registerUser(
        formData.username,
        formData.email,
        formData.password,
        formData.phone,
        formData.birthday,
        formData.address,
        formData.rol
      );
      navigation.navigate("loginstack");
    }
    return;
  };

  const validateData = () => {
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirm("");
    setErrorPhone("");

    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("debes ingresar un correo valido");
      isValid = false;
    }

    if (size(formData.phone) !== 10) {
      setErrorPhone("el numero movil debe contener 10 digitos");
      isValid = false;
    }
    if (size(formData.password) < 8) {
      setErrorPassword("debes ingresar una contraseña minimo de 8 caracteres");
      isValid = false;
    }
    if (formData.confirm !== formData.password) {
      setErrorConfirm("las contraseñas no coinciden");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View>
      <Loading
        isVisible={true}
        text="Cargando registro"
        textbtn="ingresar"
        changed={"registerstack"}
      />
      <Input
        containerStyle={styles.input}
        placeholder="Ingresar Correo"
        onChange={(e) => setFormDataOnChange(e, "email")}
        keyboardType="email-address"
        errorMessage={errorEmail}
        defaultValue={formData.email}
      />
      <Input
        containerStyle={styles.input}
        placeholder="Ingresar Usuario"
        onChange={(e) => setFormDataOnChange(e, "username")}
        defaultValue={formData.username}
      />
      <Input
        containerStyle={styles.input}
        placeholder="Ingresar numero movil"
        onChange={(e) => setFormDataOnChange(e, "phone")}
        keyboardType="phone-pad"
        errorMessage={errorPhone}
        defaultValue={formData.phone}
      />
      <Input
        containerStyle={styles.input}
        placeholder="Ingresar direccion"
        onChange={(e) => setFormDataOnChange(e, "address")}
        defaultValue={formData.address}
      />
      <Input
        containerStyle={styles.input}
        label="Ingresa fecha de cumpleaños"
        labelStyle={{ color: "black" }}
        placeholder="dd/mm/aaaa"
        onChange={(e) => setFormDataOnChange(e, "birthday")}
        defaultValue={formData.birthday}
      />
      <Input
        containerStyle={styles.input}
        label="ingresar rol"
        labelStyle={{ color: "black" }}
        placeholder="Vendedor o comprador"
        onChange={(e) => setFormDataOnChange(e, "rol")}
        defaultValue={formData.rol}
      />
      <Input
        containerStyle={styles.input}
        placeholder="Ingresar contraseña"
        password={true}
        secureTextEntry={!showPassword}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        onChange={(e) => setFormDataOnChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icono}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        containerStyle={styles.input}
        placeholder="Confirmar contraseña"
        password={true}
        secureTextEntry={!showPassword}
        errorMessage={errorConfirm}
        defaultValue={formData.confirm}
        onChange={(e) => setFormDataOnChange(e, "confirm")}
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
        title="Registrar nuevo usuario"
        buttonStyle={styles.button}
        containerStyle={styles.btncontainer}
        onPress={() => doRegisterUser()}
      />
      <Loading isVisible={true} text="Tu registro ha sido un exito" textbtn="ir a iniciar sesion" duration={3000} />

    </View>
  );
      }
const defaultFormValues = () => {
  return {
    email: "",
    username: "",
    phone: "",
    password: "",
    confirm: "",
    birthday: "",
    rol: "",
    address: "",
  };
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  btncontainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "rebeccapurple",
  },
  icono: {
    color: "#c1c1c1",
  },
});
