import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const WebDev = ({navigation}: any) => {
  const [leetVideo, setLeetVideo] = useState('');
  useEffect(() => {
    const subscriber = firestore()
      .collection('webdev')
      .onSnapshot(querySnapshot => {
        const leetVideo = [];

        querySnapshot.forEach(documentSnapshot => {
          leetVideo.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setLeetVideo(leetVideo);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  console.log(leetVideo);
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          marginVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../assets/images/arrow-left.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 25,
          }}>
          web development.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FE7276',
          height: 180,
          marginHorizontal: 20,
          padding: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <View style={{width: '40%'}}>
          <Image
            resizeMode="contain"
            style={{height: '100%', width: 'auto'}}
            source={require('../assets/images/webd.png')}
          />
        </View>
        <View style={{width: '50%'}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 15,
              color: 'white',
            }}>
            Web Development.
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
              color: 'white',
            }}>
            Web Devlopment not to pass interviews but to build products of your
            thoughts.
          </Text>
        </View>
      </View>
      {/* put the flatlist here */}
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
            paddingHorizontal: 25,
            fontSize: 20,
          }}>
          All Videos {`->`}
        </Text>
      </View>
      <FlatList
        data={leetVideo}
        renderItem={({item}: any) => (
          <TouchableOpacity onPress={() => navigation.navigate('videos', item)}>
            <View
              style={{
                padding: 20,
                backgroundColor: '#FE7276',
                marginHorizontal: 20,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/images/play.png')}
              />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'white',
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

export default WebDev;

const styles = StyleSheet.create({});
