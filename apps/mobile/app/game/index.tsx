import React, { useState } from 'react';
import BingoBoard from './board';
import { Text, View } from 'react-native';
import { Row } from '../../components/Row';
import { Button } from '../../components/Button';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

interface LastNumber {
  children: React.ReactNode;
  isLast?: boolean;
}

const LastNumber: React.FC<LastNumber> = ({ children, isLast }) => {
  const color = isLast ? "bg-green-500" : "bg-red-500";

  return (
    <View className={`flex justify-center align-middle ${color} rounded-md w-12 h-12`}>
      <Text className="text-dark text-center font-extrabold text-xl">
        {children}
      </Text>
    </View>
  );
}

const GameBoard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State for visibility
  const scale = useSharedValue<number>(1); // Shared value for scale

  const handlePress = () => {
    setIsVisible(true); // Show the text
    scale.value = withSpring(1.5, {}, () => {
      scale.value = withSpring(1); // Reset scale after popping
    });

    // Hide the text after 1 second
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  return (
    <>
      <View className='flex flex-row justify-between w-full items-center mb-4'>
        <LastNumber>
          12
        </LastNumber>
        <Text className="font-bold text-lg">
          ULTIMOS NUMEROS
        </Text>
        <LastNumber isLast>
          25
        </LastNumber>
      </View>
      <Row>
        <BingoBoard />
      </Row>
      <Row>
        <Button
          classNameText='font-extrabold'
          onPress={handlePress}
        >
          BONGO
        </Button>
      </Row>
      {isVisible && ( // Conditionally render the text based on visibility
        <Animated.View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Text className='text-2xl font-bold text-white bg-black bg-opacity-50 p-2 rounded-lg'>
            Bongo!
          </Text>
        </Animated.View>
      )}
    </>
  );
};

export default GameBoard;
