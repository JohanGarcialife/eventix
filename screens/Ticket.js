import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Ticket(props) {
  const { active, setActive } = props;
  const navigation = useNavigation();
  const { params } = useRoute();
  const { title, fecha, image, precio, ubicacion } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goTickets = () => {
    setActive("tickets");
    navigation.navigate("Tickets");
  };

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

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#F2BC96", "#A287F8"]}
        className="rounded-t-2xl  border-b-2 border-dashed border-gray-500"
      >
        <View className=" p-6">
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
      </LinearGradient>

      <View>
        <View className="rounded-full bg-bg h-10 w-10 absolute -bottom-5 -left-5 z-40" />
        <View className="rounded-full bg-bg h-10 w-10 absolute -bottom-5 -right-5 z-40" />
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#F2BC96", "#A287F8"]}
        className="rounded-b-2xl "
      >
        <View className="h-36 p-6"></View>
      </LinearGradient>

      <TouchableOpacity onPress={() => goTickets()} className="mt-5">
        <View className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4">
          <Text className="text-white">Ver mis tickets</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
