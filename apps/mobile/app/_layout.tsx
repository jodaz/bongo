import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <View className={'flex-1 justify-center items-center bg-white p-8'}>
      <StatusBar style="auto" />
      <Slot />
    </View>
  );
}
