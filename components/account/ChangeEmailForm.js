import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import { Icon, Input, Button } from '@rneui/themed'

//mis imports
import { validateEmail } from '../../utils/helpers'

    export default function ChangeEmailForm({email, setShowModal, toastRef}) {
        const [newEmail, setNewEmail] = useState(email)
        const [password, setPassword] = useState(null)
        const [errorEmail, setErrorEmail] = useState(null)
        const [errorPassword, setErrorPassword] = useState(null)
        const [showPassword, setShowPassword] = useState(false)
        
        const onSubmit = () => {
            if(!validateForm()) {
                return
            }
            console.log("fuckyeah!")
        }
    
        const validateForm = () => {
            setErrorEmail(null)
            setErrorPassword(null)
            let isvalid = true;
            
            console.log("newEmail", newEmail)
            if (!validateEmail(newEmail)) {
                setErrorEmail("debes ingresar un correo valido")
                isvalid=false
            }
            if (newEmail === email) {
                setErrorEmail("Debes ingresar un correo diferente al actual")
                isvalid = false
             }
            if (isEmpty(password)) {
                setErrorPassword("Debes ingresar tu contraseña")
                isvalid=false
             }
            return true
    
        }
    
      return (
        <View style={styles.view}>
            <Input
                placeholder='ingresa el nuevo correo'
                inputContainerStyle={styles.input}
                defaultValue={email}
                onChange={(e) => setNewEmail(e.nativeEvent.text)}
                errorMessage={errorEmail}
                keyboardType="email-address"
                rightIcon={{
                    type:"material-community",
                    name:"at",
                    color:"rebeccapurple"
                }}
            />
            <Input
                placeholder="ingresa tu contraseña"
                inputContainerStyle={styles.input}
                defaultValue={password}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                errorMessage={errorPassword}
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                    type="material-community"
                    name={ showPassword ? "eye-off-outline" : "eye-outline"}
                    color="rebeccapurple"
                    iconStyle={{color:"#c2c2c2"}}
                    onPress={() => setShowPassword(!showPassword)}
                    
                    />
                }
            />
            
            <Button
                title="Cambiar correo"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        view:{
            alignItems:"center",
            paddingVertical: 10
        },
        input:{
            marginBottom:10,
            width:"100%",
            borderWidth:1
              
        },
        btnContainer:{
            width:"95%"
        },
        btn:{
            backgroundColor:"rebeccapurple"
        }
       
       
    })