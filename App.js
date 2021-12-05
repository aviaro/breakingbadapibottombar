import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomBar } from './src/navigation';

export default function App() {
  return (
    
    <NavigationContainer>
      <AppBottomBar/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##369457',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
