import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

const organizadores = [
  {
    id: 1,
    nombre: "Timothy Barlin",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 2,
    nombre: "Jeffrey Keenan",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    nombre: "Philipp Wüthrich",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 4,
    nombre: "David Reinfurt",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

export default function Siguiendo() {
  const [follow, setFollow] = useState(true);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full bg-bg px-6 pt-6">
      <View className="flex-row justify-between items-center py-5    ">
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          size={16}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-bold mb-2">Siguiendo</Text>
        <View>
          <Text className="text-lightgray">
            Sigue a los organizadores más populares para ser notificado de sus
            eventos.
          </Text>
        </View>

        <View className="mt-10 space-y-5">
          {organizadores?.map((organizador) => (
            <View
              key={organizador.id}
              className="flex-row items-center w-full justify-between"
            >
              <View className="flex-row items-center space-x-2">
                <View>
                  <Avatar.Image
                    size={32}
                    source={{
                      uri: organizador.avatar,
                    }}
                  />
                </View>
                <View className="text-left">
                  <Text className="text-white font-bold text-sm">
                    {organizador.nombre}{" "}
                  </Text>
                  <Text className="text-lightgray text-xs">Organizador</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setFollow(!follow)}>
                {follow === true ? (
                  <View className="bg-PrimaryBase p-3 rounded-md">
                    <FontAwesome6 name="plus" size={16} color="white" />
                  </View>
                ) : (
                  <View className="bg-white p-3 rounded-md">
                    <FontAwesome6 name="check" size={16} color="#665EE0" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
