import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaptopsList } from "./screens/LaptopsList";
import { LaptopsForms } from "./screens/LaptopsForms"

export default function App() {
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator initialRouteName="LaptopsListNav">
        <StackLaptops.Screen name="LaptopsListNav" component={LaptopsList} />
        <StackLaptops.Screen name="LaptopsFormsNav" component={LaptopsForms} />
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}
