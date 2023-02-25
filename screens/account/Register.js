import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RegisterForm from '../../components/account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../assets/UZI.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <RegisterForm/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({

  image: {
    height: 200,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  }
})