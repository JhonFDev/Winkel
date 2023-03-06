import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { isEmpty } from 'lodash'

export default function ChangeDisplayNameForm({displayName, setShowModal, toastRef, text}) {
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)
    
    const onSubmit = () => {
        if(!validateForm()) {
            return
        }

        console.log("fuckyeah!", newDisplayName)
          {
            text && <Text>{newDisplayName}</Text>
          }
    }

    const validateForm = () => {
        setError(null)

        if (isEmpty(newDisplayName)) {
            setError("debes ingresar nombres y apellidos")
            return false
        }
        if (newDisplayName === displayName) {
            setError("Debes ingresar nombres y apellidos diferentes a los actuales")
        }
        return true

    }

  return (
    <View style={styles.view}>
        <Input
            placeholder=" Nuevo nombre de usuario"
            inputContainerStyle={styles.input}
            defaultValue={newDisplayName}
            onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
            errorMessage={error}
            rightIcon={{
                type:"material-community",
                name:"account-circle-outline",
                color:"rebeccapurple"
            }}
        />
       
        <Button
            title="Cambiar nombres y apellios"
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
        paddingVertical: 10,
        paddingHorizontal:1
    },
    input:{
        borderColor:"red",
        borderWidth:1,
        width:"100%"
        
    },
    btnContainer:{
        width:"95%"
    },
    btn:{
        backgroundColor:"rebeccapurple"
    }
})