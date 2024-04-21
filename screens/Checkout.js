import React, { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Checkout(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    params;
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="w-screen h-full bg-bg">
      <View className="h-full justify-end ">
        <Image
          blurRadius={20}
          source={{
            uri: image,
          }}
          className="h-full absolute w-full opacity-40"
        />
        <View className="px-6">
          <Text className="text-white text-4xl font-bold mb-9">{title}</Text>
        </View>
        <View className="px-6 pb-6">
          <Text className="text-white text-2xl font-bold mb-6">
            ¿Cuántas entradas?
          </Text>
          <View className="space-y-4 mb-8">
            <View className="flex-row justify-between ">
              <View>
                <Text className="text-sm text-lightgray font-medium mb-2">
                  TIPO
                </Text>
                <Text className="text-white ">VIP</Text>
              </View>
              <View className="flex-row bg-white rounded-l-full rounded-r-full items-center">
                <TouchableOpacity
                  onPress={
                    contador2 === 0
                      ? () => setContador(0)
                      : () => setContador(contador - 1)
                  }
                >
                  <View className="bg-white rounded-l-full px-3 py-3">
                    <FontAwesome6 name="minus" size={20} color="#665EE0" />
                  </View>
                </TouchableOpacity>
                <View className="bg-white  py-2 px-4 ">
                  <Text className=" font-bold text-black text-center">
                    {contador}{" "}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setContador(contador + 1)}>
                  <View className="bg-white rounded-r-full px-3 py-3">
                    <FontAwesome6 name="plus" size={20} color="#665EE0" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-sm text-lightgray font-medium mb-2">
                  TIPO
                </Text>
                <Text className="text-white ">Normal</Text>
              </View>
              <View className="flex-row bg-white rounded-l-full rounded-r-full items-center">
                <TouchableOpacity
                  onPress={
                    contador2 === 0
                      ? () => setContador2(0)
                      : () => setContador2(contador2 - 1)
                  }
                >
                  <View className="bg-white rounded-l-full px-3 py-3">
                    <FontAwesome6 name="minus" size={20} color="#665EE0" />
                  </View>
                </TouchableOpacity>
                <View className="bg-white py-2 px-4 justify-center items-center">
                  <Text className="m-0 font-bold text-black text-center">
                    {contador2}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setContador2(contador2 + 1)}>
                  <View className="bg-white rounded-r-full px-3 py-3">
                    <FontAwesome6 name="plus" size={20} color="#665EE0" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Payment", {
                title,
                fecha,
                image,
                precio,
                ubicacion,
              })
            }
          >
            <View className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4">
              <Text className="text-white">Guardar</Text>
            </View>
          </TouchableOpacity>
          <View className="items-center">
            <TouchableOpacity>
              <Text
                onPress={() => navigation.goBack()}
                className="text-lightgray"
              >
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
