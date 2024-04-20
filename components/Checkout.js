import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Portal } from "react-native-paper";
import Payment from "./Payment";

export default function Checkout(props) {
  const {
    toggleOverlay,
    title,
    fecha,
    image,
    precio,
    organizador,
    ubicacion,
    showCheckout,
    setShowCheckout,
    navigation,
  } = props;
  const [showPayment, setShowPayment] = useState(false);

  const togglePayment = () => {
    setShowPayment(!showPayment);
  };
  return (
    <View className="w-screen h-screen bg-bg">
      <View className="h-full justify-end pb-6">
        <Image
          blurRadius={20}
          source={{
            uri: image,
          }}
          className="h-screen absolute w-full opacity-40"
        />
        <View className="px-6">
          <Text className="text-white text-4xl font-bold mb-9">{title}</Text>
        </View>
        <View className="px-6 pb-6">
          <Text className="text-white text-2xl font-bold mb-6">
            ¿Cuántas entradas?
          </Text>
          <View className="space-y-4 mb-8">
            <View className="flex-row justify-between ">
              <View>
                <Text className="text-sm text-lightgray font-medium mb-2">
                  TIPO
                </Text>
                <Text className="text-white ">VIP</Text>
              </View>
              <View className="flex-row">
                <TouchableOpacity>
                  <View className="bg-white rounded-l-full px-3 py-3">
                    <Text className="m-0 text-PrimaryBase text-xl">-</Text>
                  </View>
                </TouchableOpacity>
                <View className="bg-white py-2 px-4 justify-center items-center">
                  <Text className="m-0 font-bold text-black">0</Text>
                </View>
                <TouchableOpacity>
                  <View className="bg-white rounded-r-full px-3 py-3">
                    <Text className="m-0 text-PrimaryBase text-xl">+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row justify-between">
              <View>
                <Text className="text-sm text-lightgray font-medium mb-2">
                  TIPO
                </Text>
                <Text className="text-white ">Normal</Text>
              </View>
              <View className="flex-row">
                <TouchableOpacity>
                  <View className="bg-white rounded-l-full px-3 py-3">
                    <Text className="m-0 text-PrimaryBase text-xl">-</Text>
                  </View>
                </TouchableOpacity>
                <View className="bg-white py-2 px-4 justify-center items-center">
                  <Text className="m-0 font-bold text-black">0</Text>
                </View>
                <TouchableOpacity>
                  <View className="bg-white rounded-r-full px-3 py-3">
                    <Text className="m-0 text-PrimaryBase text-xl">+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              onPress={togglePayment}
              className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4"
            >
              <Text onPress={togglePayment} className="text-white">
                Guardar
              </Text>
            </View>
          </TouchableOpacity>
          <View className="items-center">
            <TouchableOpacity>
              <Text onPress={toggleOverlay} className="text-lightgray">
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Portal.Host isVisible={showPayment}>
        <Payment
          togglePayment={togglePayment}
          image={image}
          title={title}
          precio={precio}
          fecha={fecha}
          organizador={organizador}
          ubicacion={ubicacion}
          setShowPayment={setShowPayment}
          showPayment={showPayment}
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
          navigation={navigation}
        />
      </Portal.Host>
    </View>
  );
}
