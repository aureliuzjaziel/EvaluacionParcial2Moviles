import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
    
      <StackNavigator/>
    
    </NavigationContainer>
  );
}

export default App;


