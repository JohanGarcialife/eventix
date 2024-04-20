import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";

const onChange = (e, type) => {
  setFormData({ ...formData, [type]: e.nativeEvent.text });
};

function LoginForm(props) {
  const { changeForm, setUser, user } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else {
      console.log("loguear");
    }
    setFormError(errors);
  };

  return (
    <>
      <View className="mb-4">
        <Text className="font-bold text-4xl text-white mb-4">
          Encuentra tus eventos favoritos
        </Text>
        <Text className="text-base mb-4 text-lightgray">
          Eventix está aquí para ayudarte a encontrar los mejores eventos basado
          en tus intereses.
        </Text>
      </View>
      <View className="space-y-4">
        <View className="w-full bg-inkDark rounded-lg p-4">
          <TextInput
            placeholder="Correo Electrónico"
            placeholderTextColor="#929497"
            onChange={(e) => onChange(e, "email")}
            className="text-white"
          />
        </View>
        <View className="w-full bg-inkDark rounded-lg p-4">
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#929497"
            secureTextEntry={true}
            onChange={(e) => onChange(e, "password")}
            className="text-white"
          />
        </View>
      </View>
      <View className="flex-row w-full justify-center space-x-4 mt-4">
        <TouchableOpacity>
          <View
            onPress={setUser(true)}
            className="w-full px-7 py-3 mx-1 justify-center items-center rounded-[32px] bg-PrimaryBase"
          >
            <Text className="text-white">Iniciar Sesión</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeForm}>
          <View className="w-full px-7 py-3 mx-1 justify-center items-center rounded-[32px] bg-white">
            <Text className="text-PrimaryBase">¿No tienes cuenta?</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-7 items-center">
        <TouchableOpacity>
          <Text className="text-PinkBase">¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function defaultValue() {
  return {
    email: "",
    password: "",
  };
}

export default LoginForm;
