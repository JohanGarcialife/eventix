import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import Grid from "../components/Grid";

const eventos = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Título o nombre del evento con un nombre largo",
    organizador: "NYS of Interior Design",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1649471323554-aa4cb720261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1649471323554-aa4cb720261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1596131397999-bb01560efcae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    title: "Título o nombre del evento",
    organizador: "Organizador",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    fecha: "Jul 6 · 8:00 PM",
    precio: "Gratis",
    ubicacion: "170 E 70th St, New York, NY 10021",
  },
];

function Descubre() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full bg-bg px-6 pt-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-bold mb-2">Descubre</Text>
        <Text className="text-white">Encuentra tus eventos favoritos</Text>
        <View className="mt-7 bg-inkDark p-4 rounded-lg">
          <TextInput
            className="text-white"
            placeholder="Buscar"
            placeholderTextColor="#929497"
          />
        </View>
        <View className="mt-6">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <TouchableOpacity>
              <View className="px-7 py-3 mx-1 rounded-[32px] bg-PrimaryBase">
                <Text className="text-white">Hoy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="px-7 py-3 mx-1 rounded-[32px] border border-[#282828]">
                <Text className="text-white">Mañana</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="px-7 py-3 mx-1 rounded-[32px] border border-[#282828]">
                <Text className="text-white">Esta semana</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="px-7 py-3 mx-1 rounded-[32px] border border-[#282828]">
                <Text className="text-white">Este mes</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View className="my-8">
          <Grid eventos={eventos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Descubre;
