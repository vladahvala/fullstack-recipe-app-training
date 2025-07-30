import { Slot } from "expo-router";
import  { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from '@clerk/clerk-expo'
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaView style={{flex: 1, backrouundColor: COLORS.background}}>
        <Slot /> 
      </SafeAreaView>
    </ClerkProvider>
  )
}
