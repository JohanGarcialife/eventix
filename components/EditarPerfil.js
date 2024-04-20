import React, { useState } from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from "react-native-select-dropdown";
import moment from "moment";
import { LinearGradient } from "expo-linear-gradient";

function EditarPerfil(props) {
  const { toggleOverlay } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [fecha, setFecha] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFecha(date);

    console.warn(fecha);
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const sexo = [
    { title: "Mujer" },
    { title: "Hombre" },
    { title: "Indefinido" },
  ];
  return (
    <View className="w-screen h-screen bg-bg ">
      <View className="flex-row justify-between items-center py-10 mb-3 top-6  left-6 absolute z-50">
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back-ios"
            color="#fff"
            size={16}
            onPress={toggleOverlay}
          />
        </TouchableOpacity>
      </View>
      <View className=" justify-center items-center py-10 mb-3 top-6  w-full absolute z-10">
        <Text className="text-white"> Editar Perfil</Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1560800155-6a1dee6a3d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
          className="h-96 w-full "
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.8 }}
          colors={["#141414", "transparent"]}
          className="absolute h-full z-10"
        />
      </View>
      <View className="h-fit">
        <View className="absolute z-20 -top-24 py-6 bg-gradient-to-b from-bg to-transparent w-full px-6">
          <TouchableOpacity>
            <Text className="text-PinkBase text-sm mb-6 text-center">
              Cambiar mi foto
            </Text>
          </TouchableOpacity>
          <View className="space-y-4">
            <View className="flex-row  justify-between ">
              <View className=" bg-inkDark w-[48%] rounded-lg p-4">
                <TextInput
                  placeholder="Nombre"
                  placeholderTextColor="#929497"
                  // onChange={(e) => onChange(e, "email")}
                  className="text-white"
                />
              </View>
              <View className=" bg-inkDark w-[48%] rounded-lg p-4">
                <TextInput
                  placeholder="Apellido"
                  placeholderTextColor="#929497"
                  // onChange={(e) => onChange(e, "email")}
                  className="text-lightgray"
                />
              </View>
            </View>
            <View className=" bg-inkDark w-full rounded-lg p-4">
              <TextInput
                placeholder="Correo"
                placeholderTextColor="#929497"
                // onChange={(e) => onChange(e, "email")}
                className="text-lightgray"
              />
            </View>
            <View className=" bg-inkDark w-full rounded-lg p-4">
              <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#929497"
                // onChange={(e) => onChange(e, "email")}
                className="text-lightgray"
              />
            </View>
            <TouchableOpacity>
              <View
                onPress={showDatePicker}
                className=" bg-inkDark w-full rounded-lg p-4 flex-row items-center justify-between"
              >
                {fecha === null ? (
                  <Text className="text-lightgray">Fecha de nacimiento</Text>
                ) : (
                  <Text className="text-lightgray">
                    {moment(fecha).format("DD/MM/YYYY")}{" "}
                  </Text>
                )}
                <TouchableOpacity>
                  <MaterialIcons
                    name="calendar-today"
                    color="#fff"
                    size={16}
                    onPress={showDatePicker}
                  />
                </TouchableOpacity>
                <DateTimePickerModal
                  className="w-full"
                  onPress={showDatePicker}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </TouchableOpacity>
            <View className=" bg-inkDark w-full rounded-lg ">
              <SelectDropdown
                data={sexo}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                renderButton={(selectedItem, isOpened) => {
                  return (
                    <View style={styles.dropdownButtonStyle}>
                      {selectedItem && (
                        <Octicons
                          name={selectedItem.icon}
                          style={styles.dropdownButtonIconStyle}
                          color="#fff"
                        />
                      )}
                      <Text style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem && selectedItem.title) ||
                          "Selecciona tu sexo"}
                      </Text>
                      <Octicons
                        name={isOpened ? "chevron-up" : "chevron-down"}
                        style={styles.dropdownButtonArrowStyle}
                        color="#fff"
                      />
                    </View>
                  );
                }}
                renderItem={(item, index, isSelected) => {
                  return (
                    <View
                      style={{
                        ...styles.dropdownItemStyle,
                        ...(isSelected && { backgroundColor: "#665EE0" }),
                      }}
                    >
                      <Text style={styles.dropdownItemTxtStyle}>
                        {item.title}
                      </Text>
                    </View>
                  );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
              />
            </View>

            <TouchableOpacity>
              <View
                //onPress={togglePayment}
                className="bg-PrimaryBase flex-row items-center justify-center py-4 w-full rounded-[48px] mb-4"
              >
                <Text
                  // onPress={togglePayment}
                  className="text-white"
                >
                  Guardar
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#1F1F1F",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#929497",
  },
  dropdownButtonArrowStyle: {
    fontSize: 25,
  },
  dropdownButtonIconStyle: {
    fontSize: 25,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#1F1F1F",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#929497",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default EditarPerfil;
