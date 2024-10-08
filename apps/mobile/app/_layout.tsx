import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <View className={'flex-1 justify-center items-center bg-white'}>
        <Slot />
      </View>
    </>
  );
}
