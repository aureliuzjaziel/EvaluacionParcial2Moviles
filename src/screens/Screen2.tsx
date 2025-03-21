import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../theme/estilos'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';

export const Screen2 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textBienvenida}>Screen2</Text>
      <Image
        source={require('../img/gatito1.jpg')} 
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <CustomButton title="Imagen" onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Screen3'}))} />
      
    </View>
  )
}
