import React, {useEffect, useState}from "react";
import { StyleSheet, Text, View, Alert, NavigatorIOS } from "react-native";
import { Button, Overlay, Icon } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Loading({ isVisible, text, textbtn, changed, duration, onTimeOut}) {
  const navigation = useNavigation()
  const[showOverlay, setShowOverlay] = useState(isVisible)

  useEffect(() => {
    setShowOverlay(isVisible);
    if (isVisible) {
      setTimeout(() => {
        setShowOverlay(false);
        if (onTimeOut) {
          onTimeOut();
        }
      }, duration);
    }
  },[isVisible])

  return (
    <Overlay isVisible={showOverlay} overlayStyle={styles.overlay}>
      <View>
      <Text style={styles.textPrimary}>Hola! 😎</Text>
      <Text ></Text>
      <ActivityIndicator style={styles.activityindicator} color="white" size="small"/>
        {
          text && <Text style={styles.textSecondary}>{text}</Text>
        }
        
              <ActivityIndicator style={styles.activityindicator} color="red" size="large" />
      {
          textbtn && 
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
        onPress={() => navigation.navigate(changed)}
        style={styles.textPrimary}>{textbtn}
        
        </Button>
        }
      </View>
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
    fontWeight:"bold"
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
