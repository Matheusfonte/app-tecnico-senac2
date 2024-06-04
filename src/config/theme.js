import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
const CombinedLightTheme = {
    ...DefaultTheme,
    ...MD3LightTheme,
}
const CombinedDarkTheme = {
    ...DarkTheme,
    ...MD3DarkTheme,
}

export default { CombinedDarkTheme, CombinedLightTheme }