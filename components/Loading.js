import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Overlay, Icon } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Loading({ isVisible}) {
  const navigation = useNavigation()
 
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <Text style={styles.textPrimary}>Hello!</Text>
      <Text style={styles.textSecondary}>Welcome to Winkel Virtual Store</Text>
      <ActivityIndicator style={styles.activityindicator} color="white" size="small"/>
      <ActivityIndicator style={styles.activityindicator} color="red" size="large"/>
      <Button
        buttonStyle={styles.button}
        icon={
          <Icon
            name="hammer-wrench"
            type="material-community"
            color="white"
            size={30}
            iconStyle={{ marginRight: 10 }}
          />
        }
        title="Start Building"
        onPress={() => navigation.navigate("Account")}
      />
    </Overlay>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "red",
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
  overlay: {
    elevation: 100,
    borderColor: "firebrick",
    borderWidth: 10,
    borderStyle: "dotted",
    borderRadius: 10,
    backgroundColor: "#00cbff",
    overlayColor: "white",
  },

  activityindicator: {},
});
