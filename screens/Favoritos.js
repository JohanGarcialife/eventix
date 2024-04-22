import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

function Favoritos() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="h-full bg-bg px-6 pt-12">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-3xl font-bold mb-2">Favoritos</Text>
        <View>
          <Text className="text-white font-bold text-2xl">
            No tienes favoritos
          </Text>
          <Text className="text-lightgray">
            Aún no has añadido ningún evento a favoritos.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Favoritos;
