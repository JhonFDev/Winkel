import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Overlay } from "@rneui/themed";

export default function Modal({ isVisible, setvisible, children }) {
  return <Overlay isVisible={isVisible} overlayStyle={styles.overlarmodal} onBackdropPress={() => setvisible(false)}>

    {children}

    </Overlay>;
}

const styles = StyleSheet.create({
    overlarmodal:{
        width:"90%",
        alignItems:"center"
    }
});
