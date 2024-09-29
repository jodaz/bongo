import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BingoBoard: React.FC = () => {
  const rows: number = 5; // Number of rows
  const cols: number = 5; // Number of columns
  const bingoLetters = ['B', 'I', 'N', 'G', 'O'];

  // Generate random numbers for Bingo
  const generateBingoNumbers = () => {
    const numbers = {
      B: Array.from({ length: 15 }, (_, i) => i + 1), // 1-15
      I: Array.from({ length: 15 }, (_, i) => i + 16), // 16-30
      N: Array.from({ length: 15 }, (_, i) => i + 31), // 31-45
      G: Array.from({ length: 15 }, (_, i) => i + 46), // 46-60
      O: Array.from({ length: 15 }, (_, i) => i + 61), // 61-75
    };

    // Randomly select 5 numbers for each column
    return bingoLetters.map((letter, index) => {
      const columnNumbers = numbers[letter];
      const selectedNumbers = [];
      while (selectedNumbers.length < 5) {
        const randomIndex = Math.floor(Math.random() * columnNumbers.length);
        selectedNumbers.push(columnNumbers[randomIndex]);
        columnNumbers.splice(randomIndex, 1); // Remove the number to avoid duplicates
      }
      return selectedNumbers;
    });
  };

  const bingoNumbers = generateBingoNumbers();

  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-row flex-wrap w-9/10">
        <View className="flex-row w-full">
          {bingoLetters.map((letter, colIndex) => {
            return (
              <View
                key={`${colIndex}`}
                className={`m-1 p-4 rounded flex-1 ${'bg-yellow-500'}`} // Free space styling
              >
                <Text className="text-dark text-center font-extrabold text-2xl">
                  {`${letter}`}
                </Text>
              </View>
            );
          })}
        </View>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <View key={rowIndex} className="flex-row w-full">
            {bingoLetters.map((letter, colIndex) => {
              const number = bingoNumbers[colIndex][rowIndex];
              const isFreeSpace = rowIndex === 2 && colIndex === 2; // Center space

              return (
                <TouchableOpacity
                  key={`${rowIndex}-${colIndex}`}
                  className={`m-1 p-2 rounded flex-1 ${isFreeSpace ? 'bg-gray-300' : 'bg-blue-500'} h-12`} // Free space styling
                  disabled={isFreeSpace}
                >
                  <Text className="text-white text-center text-xl font-extrabold" >
                    {isFreeSpace ? '' : `${number}`}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default BingoBoard;
