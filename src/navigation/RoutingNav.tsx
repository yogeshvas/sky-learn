import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import LogicChecker from '../screens/LogicChecker';
import Courses from '../screens/Courses'; // Import Courses component
import Profile from '../screens/Profile'; // Import Profile component
import {Image, View, Text} from 'react-native'; // Import Image, View, and Text from react-native

// Import your custom icon images
import CoursesIcon from '../assets/images/courses.png';
import ProfileIcon from '../assets/images/single.png';
import LeetCode from '../screens/LeetCode';
import VideoScreen from '../screens/VideoScreen';
import WebDev from '../screens/WebDev';
import GoLang from '../screens/GoLang';
import Misc from '../screens/Misc';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="logicCheck"
        component={LogicChecker}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="leetcode"
        component={LeetCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="webdev"
        component={WebDev}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="go"
        component={GoLang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="misc"
        component={Misc}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="videos"
        component={VideoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: [
          {
            alignItems: 'center',
            justifyContent: 'center',
            height: 65,
            // paddingBottom: 10,
            paddingTop: 10,
            borderTopLeftRadius: 20,
            backgroundColor: 'white',
            borderTopRightRadius: 20,
          },
          null,
        ], // This ensures the current behavior
        tabBarIcon: ({focused, color, size}) => {
          let opacity = focused ? 1 : 0.5;
          let iconSource;
          // Set the icon based on the route name
          if (route.name === 'Courses') {
            iconSource = CoursesIcon;
          } else if (route.name === 'Profiles') {
            iconSource = ProfileIcon;
          }

          // Return your custom icon component
          return (
            <Image
              source={iconSource}
              style={{width: 25, height: 25, opacity}}
            />
          );
        },
        tabBarLabel: ({focused, color}) => {
          // Set the font family for the tab label
          return (
            <Text
              style={{
                color: focused ? 'black' : 'gray',
                fontFamily: 'Poppins-SemiBold',
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
