import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
const tickets = [
  // {
  //   id: 1,
  //   image:
  //     "https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   title: "Título o nombre del evento con un nombre largo",
  //   organizador: "NYS of Interior Design",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 2,
  //   image:
  //     "https://images.unsplash.com/photo-1649471323554-aa4cb720261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 3,
  //   image:
  //     "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 4,
  //   image:
  //     "https://images.unsplash.com/photo-1649471323554-aa4cb720261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 5,
  //   image:
  //     "https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 6,
  //   image:
  //     "https://images.unsplash.com/photo-1596131397999-bb01560efcae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
  // {
  //   id: 7,
  //   image:
  //     "https://images.unsplash.com/photo-1643759543584-fb6f448d42d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  //   title: "Título o nombre del evento",
  //   organizador: "Organizador",
  //   avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  //   fecha: "Jul 6 · 8:00 PM",
  //   precio: "Gratis",
  //   ubicacion: "170 E 70th St, New York, NY 10021",
  // },
];

function Tickets() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full bg-bg px-6 pt-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-bold mb-2">Tickets</Text>
        <View>
          {tickets.length === 0 ? (
            <>
              <Text className="text-white font-bold text-2xl">
                No tienes tickets
              </Text>
              <Text className="text-lightgray">
                Aún no has comprado tickets para algún evento.
              </Text>
            </>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
