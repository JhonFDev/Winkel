import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Icon, Input } from "@rneui/themed";
import { CountryPicker } from "react-native-country-codes-picker";
import { map, size } from "lodash";

//mis imports
import { loadImageFromGallery } from "../../utils/helpers";
// fin mis imports

export default function AddShopForm({ toastRef, setLoading, navigation }) {
  const [formData, setFormData] = useState(defaultFormValues);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPhone, setErrorPhone] = useState(null);
  const [errorAddress, setErrorAddress] = useState(null);
  const [imagesSelected, setImageSelected] = useState([]);

  const addShop = () => {
    console.log(formData);
  };
  return (
    <View style={styles.viewcontainer}>
      <UploadImage
        toastRef={toastRef}
        imagesSelected={imagesSelected}
        setImageSelected={setImageSelected}
      />
      <FormAdd
        formData={formData}
        setFormData={setFormData}
        errorEmail={errorEmail}
        errorPhone={errorPhone}
        errorAddress={errorAddress}
      />

      <Button
        title="crear tienda"
        onPress={addShop}
        buttonStyle={styles.btnaddshop}
      />
    </View>
  );
}

function UploadImage({ toastRef, imagesSelected, setImageSelected }) {
  const imageSelected = async () => {
    const response = await loadImageFromGallery([4, 3]);
    if(!response.status) {
      toastRef.current.show("No has seleccionado ninguna imagen", 3000)
      return
    }
    setImageSelected([...imagesSelected, response.image])
  };
  return (
    <ScrollView horizontal style={styles.viewimage}>
      {size(imagesSelected) < 10 && (
        <Icon
          type="material-community"
          name="camera-outline"
          color="red"
          containerStyle={styles.containericon}
          onPress={imageSelected}
        />
      )}
      {map(imageSelected, (imageShop, index) => {
        <Avatar
          key={index}
          Style={styles.miniaturastyle}
          source={{ uri: imageShop }}
        />;
      })}
    </ScrollView>
  );
}

function FormAdd({
  formData,
  setFormData,
  errorEmail,
  errorPhone,
  errorAddress,
}) {
  const [country, setcountry] = useState("");
  const [callingCode, setCallingCode] = useState("+57");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(false);

  const setFormDataOnChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.viewform}>
      <Input
        placeholder="nombre de la tienda"
        defaultValue={formData.name}
        onChange={(e) => setFormDataOnChange(e, "name")}
      />
      <Input
        placeholder="Direccion de la tienda"
        defaultValue={formData.address}
        onChange={(e) => setFormDataOnChange(e, "address")}
        errorMessage={errorAddress}
      />
      <Input
        placeholder="correo de la tienda"
        keyboardType="email-address"
        keyboardAppearance="dark"
        defaultValue={formData.email}
        onChange={(e) => setFormDataOnChange(e, "email")}
        errorMessage={errorEmail}
      />
      <Button
        title="seleccionar pais"
        onPress={() => setShow(true)}
        buttonStyle={styles.btnselectcountry}
      />
      <View style={styles.phoneview}>
        {<Text style={styles.text}>{country}</Text>}
        <CountryPicker
          style={styles.countrypick}
          show={show}
          showOnly={["MX", "CO", "US"]}
          pickerButtonOnPress={(country) => {
            setFormData({
              ...formData,
              country: country.dial_code,
              callingCode: country.code,
            });
            setcountry(country.flag + country.dial_code);
            setCallingCode(country.code);
            setShow(false);
          }}
          inputPlaceholder="Selecione el indicativo de tu pais"
        />

        <Input
          placeholder="Telefono de la tienda"
          keyboardType="phone-pad"
          containerStyle={styles.inputphone}
          defaultValue={formData.phone}
          onChange={(e) => setFormDataOnChange(e, "phone")}
          errorMessage={errorPhone}
        />
      </View>
      <Input
        label="Descripcion del restaurante"
        labelStyle={styles.labelinput}
        multiline
        containerStyle={styles.textarea}
        defaultValue={formData.description}
        onChange={(e) => setFormDataOnChange(e, "description")}
      />
    </View>
  );
}
const defaultFormValues = () => {
  return {
    name: "",
    email: "",
    description: "",
    phone: "",
    address: "",
    country: "CO",
    callingCode: "57",
  };
};

const styles = StyleSheet.create({
  viewform: {
    marginHorizontal: 10,
  },
  btnaddshop: {
    margin: 20,
    backgroundColor: "rebeccapurple",
  },
  viewcontainer: {
    height: "100%",
  },
  phoneview: {
    width: "80%",
    flexDirection: "row",
    margin: 20,
  },
  text: {
    color: "Black",
    fontSize: 20,
  },
  countrypick: {
    alignSelf: "center",
  },
  inputphone: {
    width: "80%",
  },
  textarea: {
    height: 100,
    width: "100%",
  },
  btnselectcountry: {
    backgroundColor: "black",
  },
  labelinput: {
    alignSelf: "center",
    color: "black",
  },
  viewimage: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  containericon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniaturastyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});
