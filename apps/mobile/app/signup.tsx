import React from 'react';
import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button'; // Adjust the import path as necessary
import { TextInput } from '../components/TextInput';
import { Row } from '../components/Row';

const SignUp: React.FC = () => {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = (data: any) => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
    console.log('Confirm Password:', data.confirmPassword);
    // Add your sign-up logic here
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>
        Crea tu cuenta
      </Text>
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
          placeholder="Password"
          secureTextEntry
          rules={{ required: 'Password is required' }} // Example validation rule
        />
      </Row>
      <Row spacing='small'>
        <TextInput
          name="confirmPassword"
          control={control}
          placeholder="Confirm Password"
          secureTextEntry
          rules={{
            required: 'Confirm Password is required',
            validate: (value: string) => {
              const { password } = getValues();

              return value === password || 'Las contrasennas no coinciden';
            },
          }} // Validation rule to check if passwords match
        />
      </Row>
      <Row spacing='small'>
        <Button onPress={handleSubmit(onSubmit)}>
          Registrate
        </Button>
      </Row>
      <Row spacing='small'>
        <Button route="signin"> {/* Replace with your actual route */}
          Iniciar sesion
        </Button>
      </Row>
    </View>
  );
};

export default SignUp;
