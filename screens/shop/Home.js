import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

import Loading from "../../components/Loading";

export default function Home({navigation}) {
  return (
    <View style={styles.viewbody}>
      <Text>Home</Text>
      <Loading
        isVisible={true}
        text="Te damos la bienvenidad a Winkel tu tienda virtual"
        textbtn="Iniciemos"
        changed={"account"}
        duration={2000}
      />
      {/* <Icon
        type="material-community"
        name="plus"
        color="red"
        reverse
        containerStyle={styles.btncontainer}
        onPress={() => navigation.navigate("add-shop")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btncontainer:{
    position:"absolute",
    bottom:10,
    right:10,
    shadowColor:"green",
    shadowOffset:{width:2, height:2},
    shadowOpacity:0.5
    
  },
  viewbody:{
    flex:1
  }
});
