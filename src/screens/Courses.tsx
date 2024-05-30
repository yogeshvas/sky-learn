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
  const [announcement, setAnnoucemnet] = useState('');

  useEffect(() => {
    const fetchAnnoucement = async () => {
      const user = await firestore()
        .collection('announcement')
        .doc('dM5ArhhO865mvf9hNdyt')
        .get();

      setAnnoucemnet(user._data.announce);
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
        <View style={{}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 25}}>
              Hi Learner!
            </Text>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/images/pngwing.com.png')}
            />
          </View>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
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
      <View>
        <ScrollView>
          <View>
            <View
              style={{
                backgroundColor: '#401F71',
                padding: 30,
                margin: 20,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
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
          </View>
        </ScrollView>
      </View>
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
});
