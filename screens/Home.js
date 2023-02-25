import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Loading from "../components/Loading";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Loading
        isVisible={true}
        text="Te damos la bienvenidad a Winkel tu tienda virtual"
        textbtn="Iniciemos"
        changed={"account"}
        duration={2000}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
