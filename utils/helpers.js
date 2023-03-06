import * as ImagePicker from "expo-image-picker";
import { Alert, Image } from "react-native";

//helper para Validar campos
export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const loadImageFromGallery = async (Array) => {
  const response = ({ statusresponse = false, image = null } =
    ImagePicker.useMediaLibraryPermissions);

  const resultpermission =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (resultpermission.statusresponse === "denied") {
    Alert.alert(
      "Debes permitir acceder a las imagenes del telefono, si quieres cambiar la foto del perfil"
    );
    return;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: Array,
    mediaTypes: ImagePicker.MediaTypeOptions.All,
  });
  if (result.canceled) {
    return;
  }
  response.statusresponse = true;
  response.image = result.assets;
  return response;
};

export const fileBlob = async(Path) => {
  const file = await fetch(Path)
  const blob = await file.blob()
  return blob
}
