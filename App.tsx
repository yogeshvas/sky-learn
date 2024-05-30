import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigation/RoutingNav';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      <Toast />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
