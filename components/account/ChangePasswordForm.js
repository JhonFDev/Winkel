import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { isEmpty, size } from "lodash";
import { Icon, Input, Button } from "@rneui/themed";

//mis imports
import { validateEmail } from "../../utils/helpers";

export default function ChangePasswordForm({ setShowModal, toastRef }) {
  const [newPassword, setNewPassword] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorNewPassword, setErrorNewPassword] = useState(null);
  const [errorCurrentPassword, setErrorCurrentPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {
    if (!validateForm()) {
      return;
    }
    console.log("fuckyeah!", newPassword);
  };

  const validateForm = () => {
    setErrorNewPassword(null);
    setErrorCurrentPassword(null);
    setErrorConfirmPassword(null);
    let isvalid = true;

    if (size(newPassword)<6) {
        setErrorNewPassword("debes ingresar una contraseña nueva de minimo 6 caracteres");
      isvalid = false;
    }
    if (isEmpty(currentPassword)) {
        setErrorCurrentPassword("Debes ingresar tu contraseña actual");
      isvalid = false;
    }
    if (confirmPassword !== newPassword) {
        setErrorConfirmPassword("las contraseña no es igual a la nueva");
        setErrorNewPassword("la confirmacion de la contraseña es diferente");
      isvalid = false;
    }
    if (currentPassword === newPassword) {
        setErrorCurrentPassword("la contraseña nueva tiene que ser diferente a la contraseña actual");
        setErrorNewPassword("ingresa un contraseña diferente a la contraseña actual");
      isvalid = false;
    }
    return true;
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="ingresa tu contraseña actual"
        inputContainerStyle={styles.input}
        defaultValue={currentPassword}
        onChange={(e) => setCurrentPassword(e.nativeEvent.text)}
        errorMessage={errorCurrentPassword}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="rebeccapurple"
            iconStyle={{ color: "#c2c2c2" }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="ingresa tu nueva contraseña"
        inputContainerStyle={styles.input}
        defaultValue={newPassword}
        onChange={(e) => setNewPassword(e.nativeEvent.text)}
        errorMessage={errorNewPassword}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="rebeccapurple"
            iconStyle={{ color: "#c2c2c2" }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Input
        placeholder="Confirmar la contraseña"
        inputContainerStyle={styles.input}
        defaultValue={confirmPassword}
        onChange={(e) => setConfirmPassword(e.nativeEvent.text)}
        errorMessage={errorConfirmPassword}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="rebeccapurple"
            iconStyle={{ color: "#c2c2c2" }}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Cambiar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
  },
  btnContainer: {
    width: "95%",
  },
  btn: {
    backgroundColor: "rebeccapurple",
  },
});
