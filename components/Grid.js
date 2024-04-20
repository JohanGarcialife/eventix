
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, TouchableOpacity, Image, View } from 'react-native'

function Grid(props) {
    const {eventos} = props
    const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
        <View className="flex-row flex-wrap items-center justify-between">
            
        {eventos?.map((evento) => ( 
            
            <Evento key={evento.id} evento={evento} navigation={navigation} />
          
        ))}
        </View>
      </ScrollView>
      
  )
}

function Evento(props) {
  const { evento, navigation } = props;
  const { id, title, avatar, fecha, image, precio, organizador, ubicacion } =
    evento;
  

  const onNavigation = () => {
    navigation.navigate("Evento", {
      id,
      title,
      avatar,
      fecha,
      image,
      precio,
      organizador,
      ubicacion,
    });
  }; 
  return(
    
<TouchableOpacity onPress={onNavigation} className="w-[48%] my-2" key={evento.id} >
            <Image
              source={{
                uri: evento.image,
              }}
              className="h-[250px]  rounded-2xl p-5"
            />
            <View className="absolute bottom-2 left-2 right-2 p-2 blur-xl backdrop-filter backdrop-blur-sm rounded-2xl bg-gray-600/50 ">
              
              <Text className=" text-white font-bold opacity-100 mt-3 truncate">
                {evento.title}
              </Text>
              <View className="flex-row items-center mt-3">
                <View className="flex-row items-center mr-2">
                  
                  <Text className="text-[12px] text-white ">
                    {evento.fecha}
                  </Text>
                </View>
                <View className="flex-row items-center truncate">
                  
                  <Text className="text-[12px] text-white ">
                    {evento.precio}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

  )
}

export default Grid