import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { initial, map } from "lodash";
import { Icon, ListItem } from "@rneui/themed";

//mis imports
import Modal from "../Modal";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default function AccountOptions({ toastRef }) {
  const [showModal, setShowModal] = useState(true);
  const [renderComponent, setRenderComponent] = useState(null);

  const generateOptions = () => {
    return [
      {
        title: "Cambiar nombre de usuario",
        iconNameLeft: "account-circle",
        iconColorLeft: "gray",
        iconNameRight: "chevron-right",
        iconColorRight: "rebeccapurple",
        onpress: () => selectedComponent("displayname"),
      },
      {
        title: "Cambiar correo",
        iconNameLeft: "at",
        iconColorLeft: "gray",
        iconNameRight: "chevron-right",
        iconColorRight: "rebeccapurple",
        onpress: () => selectedComponent("email"),
      },
      {
        title: "Cambiar Contraseña",
        iconNameLeft: "lock-reset",
        iconColorLeft: "gray",
        iconNameRight: "chevron-right",
        iconColorRight: "rebeccapurple",
        onpress: () => selectedComponent("password"),
      },
    ];
  };

  const selectedComponent = (key) => {
    console.log(key);
    switch (key) {
      case "displayname":
        setRenderComponent(
            <ChangeDisplayNameForm
        setShowModal={setShowModal}
        toastRef={toastRef}
        />
        );
        
        break;
      case "email":
        setRenderComponent(<ChangeEmailForm
        setShowModal={setShowModal}
        toastRef={toastRef}
        />);
        break;
      case "password":
        setRenderComponent(<ChangePasswordForm
          setShowModal={setShowModal}
          toastRef={toastRef}
        />
        );
        break;
    }
    setShowModal(true)
  };

  const menuOptions = generateOptions();

  return (
    <View>
      <Text>configuracion Perfil de Usuario</Text>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} style={styles.menuItem} onPress={menu.onpress}>
          <Icon
            type="material-community"
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type="material-community"
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal isVisible={showModal} setvisible={setShowModal}>
        {
            renderComponent
        }
        </Modal>      
    </View>
  );
}



const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "rebeccapurple",
  },
});
