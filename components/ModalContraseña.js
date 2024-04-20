import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { validateEmail } from "../utils/validations";
import { Button } from "react-native";

export default function ModalContraseña(props) {
  const { show, setShow } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const recuperar = () => {
    let errors = {};

    if (!formData.email) errors.email = true;
    else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else {
      console.log("recuperar");
    }
    setFormError(errors);
  };

  return (
    <View visible={show}>
      <View source={require("../assets/jpg/FondoJustin.jpg")}>
        {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}
        <TextInput
          placeholder="Correo Electrónico"
          placeholderTextColor="#969696"
          onChange={(e) =>
            setFormData({ ...formData, email: e.nativeEvent.text })
          }
        />
        <Button onPress={recuperar}>Recuperar Contraseña</Button>
        <Button onPress={() => setShow(false)}>Regresar</Button>
      </View>
    </View>
  );
}

function defaultValue() {
  return {
    email: "",
  };
}
