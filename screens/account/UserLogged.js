import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";


import Loading from'../../components/Loading'
import InfoUser from "../../components/account/InfoUser";

export default function UserLogged() {
  const toastRef = useRef();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <InfoUser/>
      <Text>UserLogged hello</Text>
      <Button
        title="cerrar sesion"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionTitle}
        onPress={() => navigation.navigate("home")}
      />
      <Toast ref={toastRef} position="center" opacity={0.9}/>      
      <Loading isVisible={true} text="cargando perfil" duration={2000}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    minHeight:"100%",
    backgroundColor:"#f9f9f9"
  },
  btnCloseSession:{
    marginTop:30,
    borderRadius:5,
    backgroundColor:"#FFFFFF",
    borderTopWidth:1,
    borderTopColor:"#442484",
    borderBottomWidth:1,
    borderBottomColor:"#442484",
    paddingVertical:10
  },
  btnCloseSessionTitle:{
    color:"#442484"
  }
});
