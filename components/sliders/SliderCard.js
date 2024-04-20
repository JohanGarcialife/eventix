import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";

function SliderCard(props) {
  const { title, eventos, navigation } = props;

  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white font-bold text-2xl">{title}</Text>
        <Text
          className="text-PinkBase"
          onPress={() => {
            navigation.navigate("CategoriaV2", {
              title,
              eventos,
            });
          }}
        >
          Ver más
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {eventos?.map((evento) => (
          <Evento key={evento.id} evento={evento} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

function Evento(props) {
  const { evento, navigation } = props;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    evento;

  const onNavigation = () => {
    navigation.navigate("Evento", {
      id,
      title,
      avatar,
      fecha,
      image,
      precio,
      organizador,
      ubicacion,
    });
  };
  return (
    <TouchableOpacity
      onPress={onNavigation}
      key={evento.id}
      className="mr-2 relative"
    >
      <Image
        source={{
          uri: evento.image,
        }}
        className="h-[436px] w-80 rounded-2xl p-5"
      />
      <View className="absolute bottom-5 left-5 right-5 p-5 blur-xl	rounded-2xl bg-gray-600/50 ">
        <View className="flex-row items-center">
          <Avatar.Image
            size={32}
            source={{
              uri: evento.avatar,
            }}
          />

          <Text className="ml-3 text-sm text-white">Anfitrión</Text>
        </View>
        <Text className=" text-white font-bold opacity-100 mt-3">
          {evento.title}
        </Text>
        <View className="flex-row items-center mt-3">
          <View className="flex-row items-center mr-5">
            <MaterialIcons name="calendar-today" size={12} color="white" />
            <Text className="text-sm text-white ml-2">{evento.fecha}</Text>
          </View>
          <View className="flex-row items-center ">
            <MaterialIcons name="confirmation-number" size={12} color="white" />
            <Text className="text-sm text-white ml-2">{evento.precio}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default SliderCard;
