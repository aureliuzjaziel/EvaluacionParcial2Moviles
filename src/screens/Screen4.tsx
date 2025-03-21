import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import { styles } from '../theme/estilos';
import { CustomTextInput } from '../components/CustomTextImput';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';


export const Screen4 = () => {
    const navigation = useNavigation();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCompare = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Por favor ingrese números válidos.');
    } else if (number1 > number2) {
      setResult(`El número mayor es: ${number1}`);
    } else if (number1 < number2) {
      setResult(`El número mayor es: ${number2}`);
    } else {
      setResult('Ambos números son iguales.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBienvenida}>Screen4</Text>
      <CustomTextInput
        placeholder="Ingrese el primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <CustomTextInput
        placeholder="Ingrese el segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <CustomButton title=">=" onPress={handleCompare} />
      {result ? <Text style={styles.resultado}>{result}</Text> : null}
      <CustomButton title="<=" onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen5' }))} />
      
    </View>
  );
};