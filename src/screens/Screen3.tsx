import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { styles } from '../theme/estilos'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';

export const Screen3 = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
                <Text style={styles.textBienvenida}>Screen4</Text>
                <Image 
                source={require('../img/gatito2.jpg')}
                style={{justifyContent:'center', width: 150, height: 150, borderRadius: 10 }}
                />
                <CustomButton
        title="Mayor o Igual"
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Screen4' }))}
      />
            </View>
  )
}
