// UniversalTextInput.tsx
import React from 'react';
import { KeyboardType, TextInput as RNTextInput, View } from 'react-native';
import { Controller, Control } from 'react-hook-form';

interface TextInputProps {
  name: string;
  control: Control;
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: any;
  keyboardType?: KeyboardType;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  placeholder,
  secureTextEntry = false,
  rules,
  keyboardType
}) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={{ width: '100%' }}>
          <RNTextInput
            className="border border-gray-300 rounded p-2 w-full mb-4"
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
        </View>
      )}
      name={name}
      rules={rules}
    />
  );
};
