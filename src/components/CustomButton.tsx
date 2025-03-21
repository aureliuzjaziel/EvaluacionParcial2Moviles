import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/estilos';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonCustom} onPress={onPress}>
      <Text style={styles.buttonTextCustom}>{title}</Text>
    </TouchableOpacity>
  );
};

