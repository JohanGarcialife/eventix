import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Octicons,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

function TabMenu(props) {
  const { user, setUser } = props;
  const [active, setActive] = useState("home");

  const navigation = useNavigation();

  function goHome() {
    setActive("home");
    navigation.navigate("Home");
  }

  function goDescubre() {
    setActive("descubre");
    navigation.navigate("Descubre");
  }

  function goTicket() {
    setActive("tickets");
    navigation.navigate("Tickets");
  }

  function goFavoritos() {
    setActive("favoritos");
  }

  function goCuenta() {
    setActive("cuenta");
    navigation.navigate("Cuenta", { user, setUser });
  }
  return (
    <View className="flex-row items-center justify-between py-4 px-6 blur-xl rounded-t-3xl bg-gray-600/50">
      <TouchableOpacity className="flex flex-col items-center" onPress={goHome}>
        <Octicons
          name="home"
          size={25}
          color={active === "home" ? "#665EE0" : "lightgray"}
        />
        <Text
          className={
            active === "home"
              ? "text-[#665EE0] text-xs"
              : "text-lightgray text-xs"
          }
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col items-center"
        onPress={goDescubre}
      >
        <EvilIcons
          name="search"
          size={24}
          color={active === "descubre" ? "#665EE0" : "lightgray"}
        />
        <Text
          className={
            active === "descubre"
              ? "text-[#665EE0] text-xs"
              : "text-lightgray text-xs"
          }
        >
          Descubre
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col items-center"
        onPress={goTicket}
      >
        <MaterialCommunityIcons
          name="ticket-confirmation-outline"
          size={25}
          color={active === "tickets" ? "#665EE0" : "lightgray"}
        />
        <Text
          className={
            active === "ticket"
              ? "text-[#665EE0] text-xs"
              : "text-lightgray text-xs"
          }
        >
          Ticket
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col items-center"
        onPress={goFavoritos}
      >
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={25}
          color={active === "favoritos" ? "#665EE0" : "lightgray"}
        />
        <Text
          className={
            active === "favoritos"
              ? "text-[#665EE0] text-xs"
              : "text-lightgray text-xs"
          }
        >
          Favoritos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col items-center"
        onPress={goCuenta}
      >
        <MaterialIcons
          name="person-outline"
          size={25}
          color={active === "cuenta" ? "#665EE0" : "lightgray"}
        />
        <Text
          className={
            active === "cuenta"
              ? "text-[#665EE0] text-xs"
              : "text-lightgray text-xs"
          }
        >
          Cuenta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TabMenu;
