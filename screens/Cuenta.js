import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Modal } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import EditarPerfil from "../components/EditarPerfil";

function Cuenta(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { user, setUser } = params;
  const [showEditarPerfil, setShowEditarPerfil] = useState(false);
  console.log(navigation);

  const toggleOverlay = () => {
    setShowEditarPerfil(!showEditarPerfil);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full justify-between bg-bg px-6 pt-20">
      <View>
        <View className="flex-row items-center mb-6">
          <Avatar.Image
            size={48}
            source={{
              uri: "https://images.unsplash.com/photo-1560800155-6a1dee6a3d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
          />
          <View className="ml-4">
            <Text className="text-white text-lg bold">Juinal William</Text>
            <TouchableOpacity onPress={toggleOverlay}>
              <Text className="text-PinkBase">Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View className="flex-row justify-between items-center py-4">
            <Text className="text-white text-lg">Siguiendo</Text>
            <Ionicons name="person-add" color="#fff" size={18} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row justify-between items-center py-4">
            <Text className="text-white text-lg">Ayuda</Text>
            <Ionicons name="help-outline" color="#fff" size={18} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-row justify-between items-center py-4">
            <Text className="text-white text-lg">Configuración</Text>
            <Ionicons name="settings" color="#fff" size={18} />
          </View>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <TouchableOpacity onPress={() => setUser(false)}>
          <Text className="text-RedBase mb-4">Cerrar sesión</Text>
        </TouchableOpacity>
        <Text className="text-lightgray mb-4">
          Logueado como: juinalwilliam@mail.com
        </Text>
      </View>
      <Modal visible={showEditarPerfil}>
        <EditarPerfil toggleOverlay={toggleOverlay} />
      </Modal>
    </SafeAreaView>
  );
}

export default Cuenta;
