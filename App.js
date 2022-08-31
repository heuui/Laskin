import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    setResult(numberOne + numberTwo)
  }

  const calculateSubtraction = () => {
    setResult(numberOne - numberTwo)
  }

  return (
    <View style={styles.container}>
      <Text>Result {result}</Text>
      <TextInput
              placeholder={'Enter number'}
              style={{ borderColor: 'gray', borderWidth: 1, width: 200, height: 50 }}
              keyboardType='number-pad'
              onChangeText={numberOne => setNumberOne(Number(numberOne))}
              value={numberOne}
      />
      <TextInput
              placeholder={'Enter number'}
              style={{ borderColor: 'gray', borderWidth: 1, width: 200, height: 50 }}
              keyboardType='number-pad'
              onChangeText={numberTwo => setNumberTwo(Number(numberTwo))}
              value={numberTwo}
      />
      <View style={{ flexDirection:"row" }}>
        <Button 
          onPress={calculateSum}
          title="+"
        />
        <Button 
          onPress={calculateSubtraction} 
          title="-"
        />
      </View>
      <StatusBar style="auto" />
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
