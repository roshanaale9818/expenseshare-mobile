import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export const unstable_settings = {
  anchor: "(auth)",
};
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="light" />
    </Stack>
  );
}
