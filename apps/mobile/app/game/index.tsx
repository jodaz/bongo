import React from 'react';
import BingoBoard from './board';
import { Text, View } from 'react-native';
import { Row } from '../../components/Row';
import { Button } from '../../components/Button';

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
  )
}

const GameBoard: React.FC = () => {
  return (
    <>
      <View className='flex flex-row justify-between w-full items-center  mb-4'>
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
        >
          BONGO
        </Button>
      </Row>
    </>
  )
};

export default GameBoard;
