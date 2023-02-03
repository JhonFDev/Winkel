import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Image, Icon } from "@rneui/themed";

export default function Login() {
  return (
    <ScrollView centerContent="true" style={styles.viewBody}>
      <Image
        source={require("../../assets/UZI.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <Text></Text>
        <Button
          buttonStyle={styles.buttom}
          title="Inicia Sesion con Winkel"
          icon={
            <Icon
              name="emoticon-cool"
              type="material-community"
              color="white"
              size={30}
              iconStyle={{ marginRight: 10 }}
            />
          }
        />
        <Button
          buttonStyle={styles.buttom}
          title="Inicia Sesion con Facebook"
          icon={
            <Icon
              name="facebook"
              type="material-community"
              color="white"
              size={30}
              iconStyle={{ marginRight: 10 }}
            />
          }
        />
        <Button
          buttonStyle={styles.buttom}
          title="Inicia Sesion con Google"
          icon={
            <Icon
              name="google"
              type="material-community"
              color="white"
              size={30}
              iconStyle={{ marginRight: 10 }}
            />
          }
        />
        <Button
          buttonStyle={styles.buttom}
          title="Inicia Sesion con tu celular"
          icon={
            <Icon
              name="cellphone"
              type="material-community"
              color="white"
              size={30}
              iconStyle={{ marginRight: 10 }}
            />
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  buttom: {
    marginBottom: 10,
  },
  viewBody: {
    marginHorizontal: 30,
  },
});
