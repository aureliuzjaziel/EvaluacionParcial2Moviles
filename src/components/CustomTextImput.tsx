import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from '../theme/estilos';

export const CustomTextInput: React.FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};



