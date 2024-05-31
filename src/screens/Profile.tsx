import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Profile = ({navigation}: any) => {
  const signOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('login');
      console.log('User signed out!');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent:"space-around"}}>
      <View
        style={{
          backgroundColor: '#401F71',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          // height:"25%",
          paddingVertical:20
        }}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            margin: 40,
            gap: 20,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 320,
            }}>
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/images/snap.png')}
            />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
                fontSize: 20,
              }}>
              Hi Learners!
            </Text>
            <Text style={{fontFamily: 'Poppins-Regular', color: 'white'}}>
              Hope, We are able to {'\n'} contribute to you {'\n'} knowledge.
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingTop:60,height:"55%",}}>
        <TouchableOpacity>
        <Text style={{color:"black", fontFamily:"Poppins-SemiBold", textAlign:"center"}}>-> Mail us your suggestions </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{color:"black", fontFamily:"Poppins-SemiBold", textAlign:"center"}}>-> Rate Us 5 Star on Play Store. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{color:"black", fontFamily:"Poppins-SemiBold", textAlign:"center"}}>-> Check out our other Apps. </Text>
        </TouchableOpacity>
       
      </View>
      <View style={{ height:"20%", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:10, }}>
      <View style={{backgroundColor:"#D9D9D9", padding:10, paddingHorizontal:20}}> 
          <TouchableOpacity>
            <Text style={{color:"black", fontFamily:"Poppins-SemiBold"}}>Follow Me</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#401F71", padding:10, paddingHorizontal:30}}>
          <TouchableOpacity onPress={signOut}>
            <Text style={{color:"white", fontFamily:"Poppins-SemiBold"}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
