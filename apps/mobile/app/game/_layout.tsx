import { Slot } from 'expo-router';
import { Button } from '../../components/Button';
import { View } from 'react-native';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';

export default function Layout() {
  return (
    <>
      <Slot />
      <View className="flex flex-row justify-between w-full items-center  mb-4">
        <Button btnClassName='w-20' disabled>
          <ArrowLeft size={24} color='#fff' />
        </Button>
        <Button btnClassName='w-20'>
          <ArrowRight size={24} color='#fff' />
        </Button>
      </View>
    </>
  );
}
