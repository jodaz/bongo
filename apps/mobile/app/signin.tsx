import React from 'react';
import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button'; // Adjust the import path as necessary
import { TextInput } from '../components/TextInput';
import { Row } from '../components/Row';

const SignIn = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
  };

  return (
    <View className={'flex-1 justify-center items-center bg-white p-4'}>
      <Text className={'text-2xl font-bold mb-6'}>Iniciar sesion</Text>
      <Row spacing='small'>
        <TextInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{ required: 'Email is required' }}
          keyboardType='email-address'
        />
      </Row>
      <Row spacing='small'>
        <TextInput
          name="password"
          control={control}
          placeholder="Contrasenna"
          secureTextEntry
          rules={{ required: 'Password is required' }} // Example validation rule
        />
      </Row>
      <Row spacing='small'>
        <Button onPress={handleSubmit(onSubmit)}>
          Iniciar sesion
        </Button>
      </Row>
      <Row spacing='small'>
        <Button route="signup"> {/* Replace with your actual route */}
          Registrate
        </Button>
      </Row>
    </View>
  );
};

export default SignIn;
