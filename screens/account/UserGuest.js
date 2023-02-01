import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


//pantalla invitado

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent="true" style={styles.viewBody}>
      <Image
        source={require("../../assets/UZI.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenido a Winkel</Text>
      <Button
        buttonStyle={styles.button}
        title="Inicia Sesion"
        onPress={() => navigation.navigate("loginstack")}
        />
      <Text style={styles.title}>Ó</Text>
      <Button buttonStyle={styles.button} title="Registrate"
        onPress={() => navigation.navigate("registerstack")}
      />
    </ScrollView>
  );
}
//fin pantalla invitado

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 200,
    width: "100%",
    marginTop: 20,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginBottom: 10,
  },
});
