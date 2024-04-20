import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";

function Slider(props) {
  const { title, eventos, navigation } = props;

  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white font-bold text-2xl">{title} </Text>
        <Text
          className="text-PinkBase"
          onPress={() => {
            navigation.navigate("Categoria", {
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
      className="relative mr-2"
    >
      <Image
        source={{
          uri: evento.image,
        }}
        className="h-56 w-80 rounded"
      />
      <Text className=" text-white font-bold mt-4">{evento.title}</Text>
      <Text className="mt-3 text-sm text-gray-500">{evento.organizador} </Text>
      <View className="flex-row items-center mt-3">
        <View className="flex-row items-center mr-5"> 
          <MaterialIcons name="calendar-today" size={12} color="white" />
          <Text className="text-sm text-white ml-2">{evento.fecha} </Text>
        </View>
        <View className="flex-row items-center ">
          <MaterialIcons name="confirmation-number" size={12} color="white" />
          <Text className="text-sm text-white ml-2">{evento.precio}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Slider;
