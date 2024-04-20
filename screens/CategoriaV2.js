import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function CategoriaV2() {
  const navigation = useNavigation();
  const {
    params: { title, eventos },
  } = useRoute();

  const cantidadEventos = eventos.length;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full bg-bg p-6">
      <View className="flex-row justify-between py-5 mb-3">
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          size={16}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text className="text-white text-3xl font-bold mb-2">{title}</Text>
      <Text className="text-white">Eventos {cantidadEventos}</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-7 w-fit">
        {eventos?.map((evento) => (
          <TouchableOpacity key={evento.id} className="mb-6 ">
            <View className="flex-row ">
              <View>
                <Image
                  source={{
                    uri: evento.image,
                  }}
                  className="h-24 w-32 rounded-2xl"
                />
              </View>
              <View className="px-4 w-4/6">
                <Text className="text-white font-bold text-sm mb-4 !whitespace-normal">
                  {evento.title}
                </Text>
                <Text className="text-lightgray mb-4 text-xs">
                  {evento.organizador}
                </Text>
                <View className=" flex-row justify-between items-center">
                  <View className="flex-row items-center mr-5">
                    <MaterialIcons
                      name="calendar-today"
                      size={12}
                      color="white"
                    />
                    <Text className="text-xs text-white ml-2">
                      {evento.fecha}{" "}
                    </Text>
                  </View>
                  <View className="flex-row items-center ">
                    <MaterialIcons
                      name="confirmation-number"
                      size={12}
                      color="white"
                    />
                    <Text className="text-xs text-white ml-2">
                      {evento.precio}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoriaV2;
