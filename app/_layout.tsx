import '../global.css';

import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Layout() {
  const [loaded] = useFonts({
    "LexendDeca-Black": require("../assets/fonts/LexendDeca/LexendDeca-Black.ttf")
  });


  if (!loaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShadowVisible: false }} />;
}
