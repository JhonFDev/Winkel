import { useFocusEffect } from '@react-navigation/native'
import { set } from 'lodash'
import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from '../../components/account/LoginForm'

//mis imports
import Loading from '../../components/Loading'
import { getCurrentUser, isUserLogged } from '../../utils/actions'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'



export default function Account() {
  const[login, setLogin] = useState((true))

  // useFocusEffect(
  //   useCallback(() => {

  //     const user = getCurrentUser()
  //       user ? setLogin(true) : setLogin(false)
  //     },
  //     [],)
  //   )


  if(login == null){
   
    return <Loading isVisible={true} duration={2000}/>;
        
  }
  
    return login ? <UserLogged/> : <UserGuest/>
    

  
}

const styles = StyleSheet.create({})