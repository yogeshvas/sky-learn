import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Register = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '528514269824-5vm1fi2jr6ogholjft8vnmdms9nh33l9.apps.googleusercontent.com',
    });
  });
  const handleEmailPassRegister = () => {
    if (!email || !password) {
      setError(true);
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {
        console.log(res);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'You have been registered successfully.  👋',
          text1Style: {fontFamily: 'Poppins-SemiBold'},
          text2Style: {fontFamily: 'Poppins-Bold'},
          position: 'bottom',
          bottomOffset: 20,
        });
        navigation.navigate('HomeTabs');
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err.message,
          text1Style: {fontFamily: 'Poppins-SemiBold'},
          text2Style: {fontFamily: 'Poppins-Bold'},
          position: 'bottom',
          bottomOffset: 20,
        });
      });
  };
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'You have successfully registered 👋',
      text1Style: {fontFamily: 'Poppins-SemiBold'},
      text2Style: {fontFamily: 'Poppins-Bold'},
      position: 'bottom',
      bottomOffset: 20,
    });
    navigation.navigate('HomeTabs');
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={{paddingTop: 1, alignItems: 'center'}}>
            <Text style={styles.title}>sky learns.</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/images/image2.png')}
            />
          </View>
          <View style={styles.passwordContainer}>
            <View>
              <Image
                style={{width: 22, height: 22, opacity: 0.5}}
                source={require('../assets/images/retro.png')}
              />
            </View>
            <TextInput
              style={styles.passwordInput}
              placeholder="Name"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.passwordContainer}>
            <View>
              <Image
                style={{width: 20, height: 20, opacity: 0.5}}
                source={require('../assets/images/email.png')}
              />
            </View>
            <TextInput
              value={email}
              onChangeText={t => setEmail(t)}
              style={styles.passwordInput}
              placeholder="Email"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.passwordContainer}>
            <View>
              <Image
                style={{width: 20, height: 20, opacity: 0.5}}
                source={require('../assets/images/key.png')}
              />
            </View>
            <TextInput
              value={password}
              onChangeText={t => setPassword(t)}
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="gray"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}>
              {showPassword ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../assets/images/visible.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../assets/images/hide.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          {error && (
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Text style={{fontFamily: 'Poppins-Regular', color: 'red'}}>
                * Please fill all the fields.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20}}
            onPress={handleEmailPassRegister}>
            <Text
              style={{
                backgroundColor: '#401F71',
                color: 'white',
                padding: 10,
                paddingHorizontal: 40,
                fontFamily: 'Poppins-SemiBold',
                borderRadius: 10,
              }}>
              Register
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontFamily: 'Poppins-SemiBold', color: 'gray'}}>
              ----- Or OneTap Register With -----
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity onPress={onGoogleButtonPress}>
              <Image
                style={{height: 40, width: 40}}
                source={require('../assets/images/google-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              alignItems: 'center',
              gap: 3,
            }}>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'gray'}}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={{fontFamily: 'Poppins-Bold', color: 'gray'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  title: {
    color: '#401F71',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 35,
  },
  imageContainer: {
    height: 250,
    backgroundColor: '#401F71',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: 250,
    width: 150,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 30,
    paddingHorizontal: 12,
  },
  passwordInput: {
    justifyContent: 'center',
    height: 42,
    flex: 1,
    paddingHorizontal: 20,
    color: 'black',
    borderRadius: 5,
    fontFamily: 'Poppins-Regular',
  },
  showPasswordButton: {
    paddingHorizontal: 10,
  },
  showPasswordText: {
    fontSize: 10,
  },
});
