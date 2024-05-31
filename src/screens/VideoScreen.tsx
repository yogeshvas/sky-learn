import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoScreen = ({route, navigation}: any) => {
  const {title, video, desc} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{paddingVertical: 10, marginBottom: 10}}>
          <Image
            style={{height: 40, width: 40}}
            source={require('../assets/images/arrow-left.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.videoContainer}>
        <View style={styles.videoWrapper}>
          <Video
            source={{uri: video}}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            fullscreenAutorotate={true}
          />
        </View>
      </View>
      <Text style={styles.title}>Topic : {title}</Text>
      <View
        style={{
          backgroundColor: '#6B8A7A',
          padding: 20,
          minHeight: 200,
          marginHorizontal: 5,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Bold'}}>
          Description :
        </Text>
        <Text style={styles.description}>{desc}</Text>
      </View>
    </ScrollView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensuring the content inside ScrollView stretches
    backgroundColor: 'white',
    padding: 20, // Adding padding to the container
  },
  title: {
    fontSize: 20,
    padding: 10,
    color: 'black',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoWrapper: {
    width: '100%',
    height: ((Dimensions.get('window').width - 40) * 9) / 16, // Adjusting height based on the new width
    borderRadius: 10, // Adding border radius
    overflow: 'hidden', // Ensuring the video is clipped to the border radius
  },
  video: {
    width: '100%', // Making the video take full width of the container
    height: '100%', // Making the video take full height of the container
  },
  description: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
