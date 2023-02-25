import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed'
import { loadImageFromGallery } from '../../utils/helpers'


export default function InfoUser() {

    const changePhoto = async() => {
        console.log("cambia foto?")
        const result = await loadImageFromGallery([1, 1])
        console.log(result)
    }

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={'large'}
        onPress={changePhoto}
        containerStyle={styles.avatar}
        source={require("../../assets/VAN.png")}
      />
      <View style={styles.infouser}>
        <Text style={styles.displayName}>
            anonimo
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        paddingVertical:30
    },
    infouser:{
        marginLeft: 10
    },
    displayName:{
        fontWeight:"bold",
        fontSize:17,
        paddingBottom:5
        
    }
    
})