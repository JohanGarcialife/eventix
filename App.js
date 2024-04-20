import { useState } from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import Auth from "./components/Auth";
import Categoria from "./screens/Categoria";
import CategoriaV2 from "./screens/CategoriaV2";
import Evento from "./screens/Evento";
import Descubre from "./screens/Descubre";
import Cuenta from "./screens/Cuenta";
import Ticket from "./screens/Ticket";
import Tickets from "./screens/Tickets";
import TabMenu from "./components/TabMenu";

const Stack = createStackNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [user, setUser] = useState(false);

  if (user === undefined) return null;

  return (
    <PaperProvider>
      <NavigationContainer>
        {user === true ? (
          <>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Categoria" component={Categoria} />
              <Stack.Screen name="CategoriaV2" component={CategoriaV2} />
              <Stack.Screen name="Evento" component={Evento} />
              <Stack.Screen name="Descubre" component={Descubre} />
              <Stack.Screen name="Cuenta" component={Cuenta} />
              <Stack.Screen name="Ticket" component={Ticket} />
              <Stack.Screen name="Tickets" component={Tickets} />
            </Stack.Navigator>
            <View className="bg-bg">
              <TabMenu user={user} setUser={setUser} />
            </View>
          </>
        ) : (
          <Auth user={user} setUser={setUser} />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}
