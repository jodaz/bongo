// Button.tsx
import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { useRouter } from 'expo-router';

interface ButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  route?: string;
  children: React.ReactNode;
  btnClassName?: string;
  classNameText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  route,
  children,
  btnClassName,
  classNameText
}) => {
  const router = useRouter();

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
    if (route) {
      router.push(route);
    }
  };

  return (
    <TouchableOpacity
      className={`bg-blue-500 rounded p-2 w-full ${btnClassName}`}
      onPress={handlePress}
    >
      <Text className={`text-white text-center ${classNameText}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
