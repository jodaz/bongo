import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Row } from '../components/Row';

export default function App() {
  return (
    <>
      <Row>
        <Button route='/signin'>
          {'Iniciar sesion'}
        </Button>
      </Row>
      <Row>
        <Button route='/signup'>
          {'Registrate'}
        </Button>
      </Row>
      <Row>
        <Button route='/game'>
          {'Juego'}
        </Button>
      </Row>
    </>
  );
}
