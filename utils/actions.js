import { Text, View } from 'react-native'
import React from 'react'

export default function actions() {
 const  RegisterStorage = (props)  => {
    const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

}
  return (
    <View>
      <Text>actions</Text>
    </View>
  )
}

export const uploadImage = async(image, path, name) => {
const result = {statusResponse: false, error: null, uri: null}
return result
}

