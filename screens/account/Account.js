import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading'

//mis imports
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account() {
  const[login, setLogin] = useState(false)

  if(login == null){
   
    return <Loading/>
        
  }
  
    return login ? <UserLogged/> : <UserGuest/>
    
  
}

const styles = StyleSheet.create({})