import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import OnBording from '../screens/OnBoard';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="onBoard"
        component={OnBording}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
