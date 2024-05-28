import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: "Registro de usuário",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

