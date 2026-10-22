import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Calculadora from './src/telas/Calculadora';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <StatusBar barStyle="light-content" />
      <Calculadora />
    </SafeAreaView>
  );
}