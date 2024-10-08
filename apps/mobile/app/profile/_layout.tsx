import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function Layout() {
  return (
    <>
      <View className="flex flex-column w-full h-full items-center justify-start bg-slate-500 px-4">
        <Slot />
      </View>
    </>
  );
}
