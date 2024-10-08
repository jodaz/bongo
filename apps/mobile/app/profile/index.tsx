import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Row } from '../../components/Row';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';
import { ChevronRight, ScrollText } from 'lucide-react-native';

const Information = ({ title, children }) => (
  <View className='flex-1'>
    <Text className="font-semibold text-lg">{title}</Text>
    <Text className="text-gray-700 text-lg font-medium">{children}</Text>
  </View>
)

const Profile: React.FC = () => {

  return (
    <>
      <Row>
        <View className="flex bg-white p-4 rounded-xl shadow-md w-full">
          <Text className="text-2xl font-bold uppercase mb-4">Mis datos</Text>

          <View className='flex flex-row justify-around mb-2'>
            <Information title='Nombre'>
              Juan
            </Information>
            <Information title='Apellido'>
              Falcon
            </Information>
          </View>

          <View className='flex flex-row justify-around mb-2'>
            <Information title='Cedula'>
              12345678-9
            </Information>
            <Information title='F. de nacimiento'>
              01/01/1990
            </Information>
          </View>

          <View className='flex flex-row justify-around mb-2'>
            <Information title='Correo electronico'>
              ejemplo@ejemplo.com
            </Information>
          </View>
        </View>
      </Row>
      <Row>
        <View className="flex bg-white p-4 rounded-xl shadow-md w-full">
          <LinkButton
            text='Terminos y condiciones'
            href='https://google.com'
            LeftIcon={ScrollText}
          />
        </View>
      </Row>
      <Row>
        <Button>
          Cerrar sesion
        </Button>
      </Row>
    </>
  );
};

export default Profile;
