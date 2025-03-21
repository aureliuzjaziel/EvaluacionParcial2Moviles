import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { Screen2 } from './Screen2';
import { styles } from '../theme/estilos';
import { CustomButton } from '../components/CustomButton';

export const Screen1 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textBienvenida}>BIENVENIDO</Text>
      <View style={styles.boton}>
        <CustomButton title="Imagen 1" onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Screen2'}))} />
        <CustomButton title="Imagen 2" onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Screen3'}))} />
      </View>
      <View style={styles.boton}>
        <CustomButton title="Mayor o Igual" onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Screen4'}))} />
        <CustomButton title="Menor o Igual" onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Screen5'}))} />
        
      </View>
    </View>
  )
}
