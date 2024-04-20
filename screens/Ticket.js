import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Ticket() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { title, fecha, image, precio, ubicacion } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full bg-bg p-6">
      <View className="flex-row mb-8 justify-between items-center">
        <TouchableOpacity>
          <View className="flex-row justify-start items-center py-5  ">
            <MaterialIcons
              name="arrow-back-ios"
              color="#fff"
              size={16}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </TouchableOpacity>
        <Text className="text-white text-lg py-5">Mi ticket</Text>
        <TouchableOpacity>
          <View className="flex-row justify-end items-center py-5 ">
            <MaterialIcons
              name="file-download"
              color="#fff"
              size={20}
              onPress={() => console.log("Descargar")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/Ticket.png")}
        resizeMode="contain"
      >
        <View className="h-56 p-6">
          <Text className="text-black mb-4 text-lg font-bold">{title} </Text>
          <View className="flex-row  justify-between mb-6">
            <View className="space-y-1 w-1/2 pr-3">
              <Text className="text-black  text-xs ">FECHA </Text>
              <Text className="text-black  text-sm font-bold">{fecha} </Text>
            </View>
            <View className="space-y-1 w-1/2 pl-3">
              <Text className="text-black  text-xs ">UBICACIÓN </Text>
              <Text className="text-black  text-sm font-bold">
                {ubicacion}{" "}
              </Text>
            </View>
          </View>
          <View className="space-y-1 ">
            <Text className="text-black  text-xs ">NOMBRE </Text>
            <Text className="text-black  text-sm font-bold">
              Juinal William
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/Ticket-bottom.png")}
        resizeMode="contain"
      >
        <View className="h-36 p-6">
          <Text className="text-black text-lg font-bold"> </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
