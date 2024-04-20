import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SelectDropdown from "react-native-select-dropdown";
import moment from "moment";

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

  const sexo = ["Mujer", "Hombre", "Indefinido"];
  return (
    <View className="w-screen h-screen bg-bg ">
      <View className="flex-row justify-between items-center py-5 mb-3 top-6  left-6 absolute z-50">
        <MaterialIcons
          name="arrow-back-ios"
          color="#fff"
          size={16}
          onPress={toggleOverlay}
        />
      </View>
      <View className=" justify-center items-center py-5 mb-3 top-6  w-full absolute z-10">
        <Text className="text-white"> Editar Perfil</Text>
      </View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1560800155-6a1dee6a3d59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        }}
        className="h-96 w-full "
      />
      <View className="h-fit">
        <View className="absolute -top-24 py-6 bg-gradient-to-b from-bg to-transparent w-full px-6">
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
                />
              </View>
              <View className=" bg-inkDark w-[48%] rounded-lg p-4">
                <TextInput
                  placeholder="Apellido"
                  placeholderTextColor="#929497"
                  // onChange={(e) => onChange(e, "email")}
                />
              </View>
            </View>
            <View className=" bg-inkDark w-full rounded-lg p-4">
              <TextInput
                placeholder="Correo"
                placeholderTextColor="#929497"
                // onChange={(e) => onChange(e, "email")}
              />
            </View>
            <View className=" bg-inkDark w-full rounded-lg p-4">
              <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#929497"
                // onChange={(e) => onChange(e, "email")}
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
                defaultButtonText="Selecciona tu sexo"
                data={sexo}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#1F1F1F",
  },
  dropdown1BtnTxtStyle: { color: "#929497", textAlign: "left", fontSize: 14 },
  dropdown1DropdownStyle: { backgroundColor: "#1F1F1F" },
  dropdown1RowStyle: {
    backgroundColor: "#1F1F1F",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#1F1F1F", textAlign: "left" },
});

export default EditarPerfil;
