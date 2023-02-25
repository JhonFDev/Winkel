import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native';

//helper para Validar campos
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}


export const loadImageFromGallery = async(Array) =>{
    const {status, image=null} = ImagePicker.useMediaLibraryPermissions

    const resultpermission = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(resultpermission.status === "denied"){
            Alert.alert("permitir acceder a las imagenes del telefono")
            return 
}
    const result= await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        aspect:Array

    })
    if (result.canceled) {
        return 
        
    }
    response.status= true
    response.image=result.assets
    return response
}