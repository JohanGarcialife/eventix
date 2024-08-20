import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Confirmacion(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="w-screen h-full bg-bg">
      <View className="h-full justify-end pb-6">
        <Image
          blurRadius={20}
          source={{
            uri: image,
          }}
          className="h-full absolute w-full opacity-40"
        />
        <View className="px-6">
          <Text className="text-white text-4xl font-bold mb-6">¡Gracias!</Text>
        </View>
        <View className="space-y-2 mb-6 px-6">
          <Text className="text-lightgray text-sm">ASISTIRÁS A</Text>
          <Text className="text-white font-bold">{title} </Text>
        </View>
        <View className="px-6 ">
          <View className=" mb-8">
            <View className="flex-row items-center mb-3">
              <MaterialIcons name="calendar-today" size={14} color="white" />
              <Text className="text-sm text-lightgray ml-2">{fecha} </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons name="location-on" color="#929497" size={14} />
              <Text className="text-sm text-lightgray ml-2">{ubicacion} </Text>
            </View>
            <View className="flex-row items-center ">
              <MaterialIcons
                name="confirmation-number"
                color="#929497"
                size={14}
              />
              <Text className="text-sm text-lightgray ml-2">{precio} </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Ticket", {
                title,
                fecha,
                image,
                precio,
                ubicacion,
              })
            }
          >
            <View className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4">
              <Text className="text-white">Ver Ticket</Text>
            </View>
          </TouchableOpacity>
          <View className="items-center">
            <TouchableOpacity>
              <Text
                onPress={() => navigation.navigate("Home")}
                className="text-lightgray"
              >
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
