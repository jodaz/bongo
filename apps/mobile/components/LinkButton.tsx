import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ChevronRight } from 'lucide-react-native'; // Import the ChevronRight icon
import { Linking } from 'react-native'; // Import Linking from react-native

interface LinkButtonProps {
  text: string;
  LeftIcon: React.ReactElement;
  href: string;
}

export const LinkButton = ({
  text,
  href,
  LeftIcon
} : LinkButtonProps) => {
  const handlePress = () => {
    const url = href;
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="flex-row items-center p-1 bg-white rounded-lg shadow-md"
    >
      <LeftIcon className="mr-2" color="#001F3F" />
      <Text className="text-[#001F3F] font-semibold flex-1 text-lg">
        {text}
        </Text>
      <ChevronRight className="ml-2" color="#001F3F" />
    </TouchableOpacity>
  );
};
