import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal } from "react-native-paper";
import Confirmacion from "./Confirmacion";

export default function Payment(props) {
  const {
    togglePayment,
    title,
    fecha,
    image,
    precio,
    organizador,
    ubicacion,
    setShowPayment,
    showPayment,
    showCheckout,
    setShowCheckout,
    navigation,
  } = props;
  const [payment, setPayment] = useState("credit-card");
  const [showConfirmacion, setShowConfirmacion] = useState(false);

  const toggleConfirmacion = () => {
    setShowConfirmacion(!showConfirmacion);
  };

  const toggleOverlays = () => {
    setShowConfirmacion(!showConfirmacion);
    setShowPayment(!showPayment);
    setShowCheckout(!showCheckout);
    console.log(showConfirmacion);
    console.log(showPayment);
    console.log(showCheckout);
  };

  return (
    <View className="w-screen min-h-screen  p-6 bg-bg ">
      <View className="flex-row justify-between py-3">
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          size={16}
          onPress={togglePayment}
        />
      </View>

      <View className="mt-5 mb-10">
        <Text className="text-white font-bold text-3xl">Checkout</Text>
      </View>

      <View className="flex-row justify-between mb-4">
        <Text className="text-lightgray text-sm">DETALLES DE CONTACTO</Text>
        <TouchableOpacity>
          <Text className="text-PinkBase  text-sm">Editar contacto</Text>
        </TouchableOpacity>
      </View>

      <View className="space-y-2 mb-9">
        <Text className="text-white font-bold">Mr. Juinal William</Text>
        <Text className="text-lightgray  text-sm">juinalwilliam@mail.com</Text>
      </View>

      <View className="flex-row justify-between mb-4">
        <Text className="text-lightgray text-sm">MÉTODO DE PAGO</Text>
      </View>

      <View className="flex-row justify-between mb-6">
        <View
          onPress={() => setPayment("credit-card")}
          className="flex-row space-x-2 items-center"
        >
          {payment === "credit-card" ? (
            <Image
              source={require("../assets/selected.png")}
              className="h-8 w-8"
            />
          ) : (
            <TouchableOpacity onPress={() => setPayment("credit-card")}>
              <Image
                onPress={() => setPayment("credit-card")}
                source={require("../assets/select.png")}
                className="h-8 w-8"
              />
            </TouchableOpacity>
          )}
          <Image
            source={require("../assets/logo-Mastercard.png")}
            className="h-7 w-12"
          />
          <Text className="text-white text-sm">Mastercard</Text>
        </View>

        <View
          onPress={() => setPayment("paypal")}
          className="flex-row space-x-2 items-center"
        >
          {payment === "paypal" ? (
            <Image
              source={require("../assets/selected.png")}
              className="h-8 w-8"
            />
          ) : (
            <TouchableOpacity onPress={() => setPayment("paypal")}>
              <Image
                onPress={() => setPayment("paypal")}
                source={require("../assets/select.png")}
                className="h-8 w-8"
              />
            </TouchableOpacity>
          )}
          <Image source={require("../assets/paypal.png")} className="h-7 w-7" />
          <Text className="text-white text-sm">Paypal</Text>
        </View>
      </View>
      {payment === "credit-card" && (
        <>
          <View className="space-y-4 pb-8 border-b border-inkDark mb-8">
            <View className=" bg-inkDark w-full rounded-lg p-4">
              <TextInput
                placeholder="Número de tarjeta"
                placeholderTextColor="#929497"
                // onChange={(e) => onChange(e, "email")}
              />
            </View>
            <View className="flex-row  justify-between ">
              <View className=" bg-inkDark w-[78%] rounded-lg p-4">
                <TextInput
                  placeholder="Fecha de expiración"
                  placeholderTextColor="#929497"
                  // onChange={(e) => onChange(e, "email")}
                />
              </View>
              <View className=" bg-inkDark w-[20%] rounded-lg p-4">
                <TextInput
                  placeholder="CVV"
                  placeholderTextColor="#929497"
                  // onChange={(e) => onChange(e, "email")}
                />
              </View>
            </View>
          </View>
        </>
      )}

      {payment === "paypal" && (
        <>
          <View className="mb-10">
            <Text className="text-white">Paypal</Text>
          </View>
        </>
      )}

      <View className="flex-row justify-between mb-4">
        <Text className="text-lightgray text-sm">DETALLES DE PAGO</Text>
      </View>

      <View className="flex-row justify-between mb-10">
        <Text className="text-lightgray ">Precio de entrada</Text>

        <Text className="text-white font-bold">{precio} </Text>
      </View>

      <TouchableOpacity>
        <View
          onPress={toggleConfirmacion}
          className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4"
        >
          <Text onPress={toggleConfirmacion} className="text-white">
            Completar pago
          </Text>
        </View>
      </TouchableOpacity>

      <Portal.Host isVisible={showConfirmacion}>
        <Confirmacion
          toggleOverlays={toggleOverlays}
          toggleConfirmacion={toggleConfirmacion}
          image={image}
          title={title}
          precio={precio}
          fecha={fecha}
          ubicacion={ubicacion}
          navigation={navigation}
        />
      </Portal.Host>
    </View>
  );
}
