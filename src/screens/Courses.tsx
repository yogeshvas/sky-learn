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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 25,
                color: 'black',
              }}>
              Hi Yogesh!
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
        <View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.courseCard, styles.courseCardBlue]}
              onPress={() => navigation.navigate('leetcode')}>
              <Text style={styles.courseCardText}>Leet Code</Text>
              <Image
                style={styles.courseCardImage}
                source={require('../assets/images/leetcode.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.courseCard, styles.courseCardRed]}
              onPress={() => navigation.navigate('webdev')}>
              <Text style={styles.courseCardText}>Web Dev</Text>
              <Image
                style={styles.courseCardImage}
                source={require('../assets/images/webd.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.courseCard, styles.courseCardYellow]}
              onPress={() => navigation.navigate('go')}>
              <Text style={styles.courseCardText}>Go Lang</Text>
              <Image
                style={styles.courseCardImage}
                source={require('../assets/images/golang.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.courseCard, styles.courseCardPurple]}
              onPress={() => navigation.navigate('misc')}>
              <Text style={styles.courseCardText}>Miscellaneous</Text>
              <Image
                style={styles.courseCardImage}
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  courseCard: {
    width: '100%', // Take up 48% of the width to allow for margin
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '1%', // Add margin to create space between cards
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseCardBlue: {
    backgroundColor: '#6FB4F7',
  },
  courseCardRed: {
    backgroundColor: '#FE7276',
  },
  courseCardYellow: {
    backgroundColor: '#FDAB5D',
  },
  courseCardPurple: {
    backgroundColor: '#7C83FF',
  },
  courseCardText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
  courseCardImage: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
});
