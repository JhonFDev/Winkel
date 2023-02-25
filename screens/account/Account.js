import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

//mis imports
import Loading from '../../components/Loading'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'


export default function Account() {
  const[login, setLogin] = useState((true))

  if(login == null){
   
    return <Loading/>;
        
  }
  
    return login ? <UserLogged/> : <UserGuest/>
    
  
}

const styles = StyleSheet.create({})