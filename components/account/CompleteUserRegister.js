import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { isEmpty, size } from "lodash";

//mis imports
import Loading from "../Loading";
import { Button, Input } from "@rneui/themed";

export default function CompleteUserRegister() {
  const [formData, setFormData] = useState(defaultFormValues);
  const [errorPhone, setErrorPhone] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorIdentificationCard, setErrorIdentificationCard] = useState("");
  const [errorBirthday, setErrorBirthday] = useState("");
  const [errorSex, setErrorSex] = useState("");
  
  const setFormDataOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doCompleteUser = () => {
    if(!validateData()){
      return;
    }

    return console.log("Registro completo", formData);
     
  };

  //validando datos
  const validateData = () => {
    setErrorPhone("");

    let isValid = true;

    if (size(formData.phone) !== 10) {
      setErrorPhone("Debe contener 10 digitos");
      isValid = false;
    }
    if (isEmpty(formData.address)) {
      setErrorAddress("se requiere esta informacion");
      isValid = false;
    }
    if (isEmpty(formData.identificationCard)) {
      setErrorIdentificationCard("se requiere esta informacion");
      isValid = false;
    }
    if (isEmpty(formData.birthday)) {
      setErrorBirthday("se requiere esta informacion");
      isValid = false;
    }
    if (isEmpty(formData.sex)) {
      setErrorSex("se requiere esta informacion");
      isValid = false;
    }
    return isValid;
  };
  return (
    <View>
      {/* <Loading
        isVisible={true}
        duration={2000}
        text="Completar perfil de usuario"
      /> */}
      <Input
        label="Ingrese su numero de identificacion"
        placeholder="1234567890"
        inputStyle={styles.inputview}
        defaultValue={formData.identificationCard}
        onChange={(e) => setFormDataOnChange(e, "identificationCard")}
        keyboardType="phone-pad"
        errorMessage={errorIdentificationCard}

      />
      <Input
        label="Ingrese su numero de telefono"
        placeholder="3xx-xxx-xxxx"
        inputContainerStyle={styles.inputview}
        errorMessage={errorPhone}
        defaultValue={formData.phone}
        onChange={(e) => setFormDataOnChange(e, "phone")}
        keyboardType="phone-pad"
      />
      <Input
        label="Ingrese su dirección"
        placeholder="calle x # x-xx"
        inputContainerStyle={styles.inputview}
        defaultValue={formData.address}
        onChange={(e) => setFormDataOnChange(e, "address")}
        errorMessage={errorAddress}
      />
      <Input
        label="Ingrese fecha de nacimiento"
        placeholder="DD/MM/AAAA"
        inputContainerStyle={styles.inputview}
        defaultValue={formData.birthday}
        onChange={(e) => setFormDataOnChange(e, "birthday")}
        errorMessage={errorBirthday}
      />
      <Input
        label="Ingrese su sexo"
        placeholder="Hombre, Mujer, ¿Helicoptero?."
        inputContainerStyle={styles.inputview}
        defaultValue={formData.sex}
        onChange={(e) => setFormDataOnChange(e, "sex")}
        errorMessage={errorSex}
      />

      <Button title="Completar registro" onPress={doCompleteUser} />
    </View>
  );  
}
const defaultFormValues = () => {
  return {
    identificationCard: "",
    address: "",
    phone: "",
    birthday: "",
    sex: "",
  };
};

const styles = StyleSheet.create({
  inputview: {
    width: "100%",
  },
});
