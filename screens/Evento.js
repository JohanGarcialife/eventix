import React, { useLayoutEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Modal } from "react-native-paper";
import Checkout from "../components/Checkout";

function Evento(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleOverlay = () => {
    setShowCheckout(!showCheckout);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
          <View className="bg-PrimaryBase py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-white">Sab - 7:00 PM</Text>
            <Text className="text-xs text-white">Jun 4</Text>
          </View>
          <View className="border border-lightgray py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-lightgray">Dom - 7:00 PM</Text>
            <Text className="text-xs text-lightgray">Jun 5</Text>
          </View>
          <View className="border border-lightgray py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-lightgray">Lun - 7:00 PM</Text>
            <Text className="text-xs text-lightgray">Jun 6</Text>
          </View>
          <View className="border border-lightgray py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-lightgray">Mar - 7:00 PM</Text>
            <Text className="text-xs text-lightgray">Jun 7</Text>
          </View>
          <View className="border border-lightgray py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-lightgray">Mie - 7:00 PM</Text>
            <Text className="text-xs text-lightgray">Jun 8</Text>
          </View>
          <View className="border border-lightgray py-2 px-3 justify-center items-center rounded mr-2">
            <Text className="text-xs text-lightgray">Jue - 7:00 PM</Text>
            <Text className="text-xs text-lightgray">Jun 9</Text>
          </View>
        </ScrollView>
        <Text className="text-sm text-lightgray mt-9 mb-3">Acerca de</Text>
        <Text className="text-sm text-white text-justify">
          Interior design is a competitive industry where you need to stand out
          to get ahead. Content marketing attracts new business by engaging your
          ideal customer with consistently.
        </Text>
        <TouchableOpacity>
          <View
            onPress={toggleOverlay}
            className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mt-9"
          >
            <Text onPress={toggleOverlay} className="text-white">
              {precio}{" "}
            </Text>
            <Text onPress={toggleOverlay} className="text-white">
              · Añadir
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Modal className="absolute z-20 -top-10" visible={showCheckout}>
        <Checkout
          toggleOverlay={toggleOverlay}
          image={image}
          title={title}
          precio={precio}
          fecha={fecha}
          organizador={organizador}
          ubicacion={ubicacion}
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
          navigation={navigation}
        />
      </Modal>
    </ScrollView>
  );
}

export default Evento;
