import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Ayuda() {
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
        <Text className="text-white text-3xl font-bold mb-2">Ayuda</Text>
        <View className="mt-10 space-y-8">
          <TouchableOpacity>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base">Notificaciones</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base">Problemas técnicos</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base">Cuenta y pagos</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base">
                Políticas y privacidad
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
