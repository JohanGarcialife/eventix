import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

function Evento(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [active, setActive] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const dates = [
    { id: 1, day: "Sab", hora: "7:00 PM", fecha: "Jun 4" },
    { id: 2, day: "Dom", hora: "7:00 PM", fecha: "Jun 5" },
    { id: 3, day: "Lun", hora: "7:00 PM", fecha: "Jun 6" },
    { id: 4, day: "Mar", hora: "7:00 PM", fecha: "Jun 7" },
    { id: 5, day: "Mie", hora: "7:00 PM", fecha: "Jun 8" },
    { id: 6, day: "Jue", hora: "7:00 PM", fecha: "Jun 9" },
    { id: 7, day: "Vie", hora: "7:00 PM", fecha: "Jun 10" },
    { id: 8, day: "Sab", hora: "7:00 PM", fecha: "Jun 11" },
    { id: 9, day: "Dom", hora: "7:00 PM", fecha: "Jun 12" },
  ];

  return (
    <ScrollView className="h-full bg-bg">
      <View className="flex-row justify-between items-center py-5 mb-3 top-6  left-6 absolute z-10">
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          size={16}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="flex-row justify-between items-center py-5 w-12 top-6 right-6 absolute z-10">
        <MaterialIcons
          name="ios-share"
          color="#fff"
          size={20}
          onPress={() => console.log("Compartir")}
          className="mr-10"
        />

        {isFavorite === false ? (
          <MaterialIcons
            name="favorite-outline"
            color="#fff"
            size={20}
            onPress={() => setIsFavorite(!isFavorite)}
          />
        ) : (
          <MaterialIcons
            name="favorite"
            color="red"
            size={20}
            onPress={() => setIsFavorite(!isFavorite)}
          />
        )}
      </View>
      <Image
        source={{
          uri: image,
        }}
        className="h-72 w-full "
      />
      <ScrollView className="p-6">
        <Text className="text-white text-3xl font-bold mb-4">{title}</Text>
        <View className="flex-row items-center mb-3">
          <MaterialIcons name="calendar-today" size={14} color="white" />
          <Text className="text-sm text-lightgray ml-2">{fecha} </Text>
        </View>
        <View className="flex-row items-center mb-2">
          <MaterialIcons name="location-on" color="#929497" size={14} />
          <Text className="text-sm text-lightgray ml-2">{ubicacion} </Text>
        </View>
        <View className="flex-row items-center ">
          <MaterialIcons name="confirmation-number" color="#929497" size={14} />
          <Text className="text-sm text-lightgray ml-2">{precio} </Text>
        </View>
        <View className="mt-6 flex-row justify-between items-center border-b border-grayMedium pb-8 mb-8">
          <View className="flex-row ">
            <Avatar.Image
              size={32}
              source={{
                uri: avatar,
              }}
            />
            <View className="ml-3">
              <Text className="text-white">{organizador}</Text>
              <Text className="text-lightgray">Organizador</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View className=" justify-center items-center bg-white rounded-lg w-10 h-10">
              <MaterialIcons name="add" color="#665EE0" size={14} />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-sm text-lightgray mb-4">Fecha y hora</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {dates?.map((date) => (
            <TouchableOpacity key={date.id} onPress={() => setActive(date.id)}>
              <View
                className={
                  active === date.id
                    ? "bg-PrimaryBase py-2 px-3 justify-center items-center rounded mr-2"
                    : "border border-lightgray py-2 px-3 justify-center items-center rounded mr-2"
                }
              >
                <Text className="text-xs text-white">
                  {date.day} - {date.hora}{" "}
                </Text>
                <Text className="text-xs text-white">{date.fecha} </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text className="text-sm text-lightgray mt-9 mb-3">Acerca de</Text>
        <Text className="text-sm text-white text-justify">
          Interior design is a competitive industry where you need to stand out
          to get ahead. Content marketing attracts new business by engaging your
          ideal customer with consistently.
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Checkout", {
              title,
              fecha,
              image,
              precio,
              ubicacion,
            })
          }
        >
          <View className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mt-9">
            <Text className="text-white">{precio} </Text>
            <Text className="text-white">· Añadir</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

export default Evento;
