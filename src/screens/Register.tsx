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
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Register = ({navigation}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <TextInput
              value={email}
              onChangeText={t => setEmail(t)}
              style={styles.passwordInput}
              placeholder="Name"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              value={email}
              onChangeText={t => setEmail(t)}
              style={styles.passwordInput}
              placeholder="Email"
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.passwordContainer}>
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
          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
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
            <TouchableOpacity>
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
            <Text style={{fontFamily: 'Poppins-Medium'}}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={{fontFamily: 'Poppins-Bold'}}>Login</Text>
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
  },
  passwordInput: {
    justifyContent: 'center',
    height: 42,
    flex: 1,
    paddingHorizontal: 20,
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
