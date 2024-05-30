import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';

const LoginChecker = ({navigation}: any) => {
  const isInitialRender = useRef(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('alreadyLoggedin');
      setUser(user);
    });
    isInitialRender.current = false;
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (!isInitialRender.current) {
      if (!user) {
        navigation.replace('login');
      } else {
        navigation.replace('HomeTabs');
      }
    }
  }, [user]);

  return null;
};

export default LoginChecker;

const styles = StyleSheet.create({});
