import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Row } from '../components/Row';

export default function App() {
  return (
    <View className={'flex-1 justify-center items-center bg-white p-4'}>
      <StatusBar style="auto" />
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
        <Button route='/board'>
          {'Juego'}
        </Button>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
