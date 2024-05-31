import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const Courses = ({navigation}: any) => {
  const [announcement, setAnnoucement] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchAnnoucement = async () => {
    setRefreshing(true);
    try {
      const user = await firestore()
        .collection('announcement')
        .doc('dM5ArhhO865mvf9hNdyt')
        .get();

      setAnnoucement(user._data.announce);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAnnoucement();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
        <View style={styles.shadowContainer}>
          <Image
            style={{width: 80, height: 80}}
            source={require('../assets/images/snap.png')}
          />
        </View>
      </View>
      <View
        style={{backgroundColor: 'gray', height: 0.9, marginTop: 20}}></View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchAnnoucement}
          />
        }>
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
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* leetcode */}
            <TouchableOpacity
              style={styles.courseCardBlue}
              onPress={() => navigation.navigate('leetcode')}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Leet Code
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/leetcode.png')}
              />
            </TouchableOpacity>
            {/* webDev */}
            <TouchableOpacity
              style={styles.courseCardRed}
              onPress={() => navigation.navigate('webdev')}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Web Dev
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/webd.png')}
              />
            </TouchableOpacity>
          </View>
          {/* row 2 view */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              gap: 10,
              marginBottom: 20,
              alignItems: 'center',
            }}>
            {/* leetcode */}
            <TouchableOpacity
              style={styles.courseCardYellow}
              onPress={() => navigation.navigate('go')}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Go Lang
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/golang.png')}
              />
            </TouchableOpacity>
            {/* webDev */}
            <TouchableOpacity
              style={styles.courseCardPurple}
              onPress={() => navigation.navigate('misc')}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                Miscellaneous
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/images/misc.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
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
  courseCardBlue: {
    backgroundColor: '#6FB4F7',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 190,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseCardRed: {
    backgroundColor: '#FE7276',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 190,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseCardYellow: {
    backgroundColor: '#FDAB5D',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 190,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseCardPurple: {
    backgroundColor: '#7C83FF',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 190,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
