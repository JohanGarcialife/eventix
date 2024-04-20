import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import { validateEmail } from "../utils/validations";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RegisterForm(props) {
  const handlerShowPassword = () => {
    setShowPassword(showPassword);
  };

  const { changeForm } = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const register = () => {
    let errors = {};
    if (!formData.email || !formData.password || !formData.repeatPassword) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      if (!formData.repeatPassword) errors.repeatPassword = true;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
    } else if (formData.password !== formData.repeatPassword) {
      errors.password = true;
      errors.repeatPassword = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
      errors.repeatPassword = true;
    } else {
      console.log("Registrar");
    }
    setFormError(errors);
  };

  return (
    <>
      <View className="space-y-4">
        <View className="w-full bg-inkDark rounded-lg p-4">
          <TextInput
            placeholder="Correo Electrónico"
            placeholderTextColor="#969696"
            onChange={(e) =>
              setFormData({ ...formData, email: e.nativeEvent.text })
            }
          />
        </View>
        <View className="w-full bg-inkDark rounded-lg p-4">
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={showPassword ? false : true}
            onChange={(e) =>
              setFormData({ ...formData, password: e.nativeEvent.text })
            }
          />
          {showPassword ? (
            <MaterialCommunityIcons
              name="eye-outline"
              size={24}
              color="white"
              onPress={handlerShowPassword}
            />
          ) : (
            <MaterialCommunityIcons
              name="eye-off-outline"
              size={24}
              color="white"
              onPress={handlerShowPassword}
            />
          )}
        </View>
        <View className="w-full bg-inkDark rounded-lg p-4">
          <TextInput
            placeholder="Repetir Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            onChange={(e) =>
              setFormData({ ...formData, repeatPassword: e.nativeEvent.text })
            }
          />
        </View>
      </View>
      <View className="flex-row w-full space-x-4 justify-center mt-4">
        <TouchableOpacity>
          <View className="w-full px-7 py-3 mx-1 justify-center items-center rounded-[32px] bg-PrimaryBase">
            <Text className="text-white">Registrar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeForm}>
          <View className="w-full px-7 py-3 mx-1 justify-center items-center rounded-[32px] bg-white">
            <Text className="text-PrimaryBase">Iniciar Sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

function defaultValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}
