import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Slider from "../components/sliders/Slider";
import SliderCard from "../components/sliders/SliderCard";

function Home(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
  return (
    <ScrollView className=" bg-bg p-6">
      {/* Header */}
      <View className="py-3 flex-row items-center justify-between">
        <View>
          <TextInput
            className="text-white"
            placeholder="Eventos en..."
            placeholderTextColor="#929497"
          />
          <View className="flex-row items-center ">
            <Text className="text-white font-bold text-lg	">Caracas</Text>
            <MaterialIcons name="expand-more" size={24} color="white" />
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sliders */}
      <View className="pb-10">
        <Slider title="Caracas" eventos={eventos} navigation={navigation} />
        <SliderCard title="Popular" eventos={eventos} navigation={navigation} />
        <Slider
          title="Recomendados"
          eventos={eventos}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}

export default Home;
