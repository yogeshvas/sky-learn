import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Courses = () => {
  const [announcement, setAnnoucement] = useState('');

  useEffect(() => {
    const fetchAnnoucement = async () => {
      const user = await firestore()
        .collection('announcement')
        .doc('dM5ArhhO865mvf9hNdyt')
        .get();

      setAnnoucement(user._data.announce);
    };
    fetchAnnoucement();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Text>Hiome</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>LogOut</Text>
      </TouchableOpacity> */}
      {/* <View style={{paddingHorizontal: 20, marginTop: 20}}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/images/fire.png')}
        />
      </View> */}
      {/* badi view */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          marginTop: 30,
        }}>
        {/* left view */}
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 25,
                color: 'black',
              }}>
              Hi Learner!
            </Text>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/images/pngwing.com.png')}
            />
          </View>
          <Text style={{fontFamily: 'Poppins-Medium', color: 'black'}}>
            Today is a good day to {'\n'}start Learning.
          </Text>
        </View>
        {/* right view */}
        {/* add the drop shadow in the below view */}
        <View style={styles.shadowContainer}>
          <Image
            style={{width: 80, height: 80}}
            source={require('../assets/images/snap.png')}
          />
        </View>
      </View>
      <View
        style={{backgroundColor: 'gray', height: 0.9, marginTop: 20}}></View>

      <ScrollView>
        <View style={styles.announce}>
          <View style={{width: '30%'}}>
            <Image
              style={{
                height: 100,
                width: 100,
                transform: [{rotate: '-10deg'}],
              }}
              source={require('../assets/images/announce.png')}
            />
          </View>
          <View
            style={{
              width: '60%',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
              Announcements :
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {announcement}
            </Text>
          </View>
        </View>
        {/* courses View */}
        <View>
          {/* row 1 view */}
          <View
            style={{
              flexDirection: 'row',

              paddingHorizontal: 30,
              gap: 10,
              marginBottom: 20,
            }}>
            {/* leetcode */}
            <View
              style={{
                backgroundColor: '#6FB4F7',
                padding: 30,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                height: 190,
                width: '50%',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Leet Code
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/leetcode.png')}
              />
            </View>
            {/* webDev */}
            <View
              style={{
                backgroundColor: '#FE7276',
                padding: 30,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                height: 190,
                width: '50%',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Web Development
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/webd.png')}
              />
            </View>
          </View>
          {/* row 2 view */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              gap: 10,
              marginBottom: 20,
            }}>
            {/* leetcode */}
            <View
              style={{
                backgroundColor: '#FDAB5D',
                padding: 30,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                height: 190,
                width: '50%',
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/leetcode.png')}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Leet Code
              </Text>
            </View>
            {/* webDev */}
            <View
              style={{
                backgroundColor: '#7C83FF',
                padding: 30,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'black',
                height: 190,
                width: '50%',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Miscellaneous
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/webd.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Courses;

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: '#6D38BD',
    borderRadius: 10,
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 30.84,
    // Android shadow property
    elevation: 5,
  },
  announce: {
    backgroundColor: '#401F71',
    padding: 30,
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
