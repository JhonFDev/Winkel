import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";

//mis imports
import Loading from'../../components/Loading'
import InfoUser from "../../components/account/InfoUser";
import AccountOptions from "../../components/account/AccountOptions";

export default function UserLogged() {
  const toastRef = useRef();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <InfoUser/>
      <AccountOptions
        toastRef={toastRef}
      />
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
