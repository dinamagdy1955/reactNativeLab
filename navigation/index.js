import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../components/profile'
import React from 'react';
import Fontawesome from '@expo/vector-icons/FontAwesome'
import StackNav from './stack'
import {Text} from 'react-native'

const {Navigator, Screen} = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Navigator tabBarOptions={{style:{backgroundColor:'purple'}}}>
      <Screen name="Home" component={StackNav}
      options ={{
        tabBarLabel: ({focused})=><Text style={{color:focused ? 'white':'grey' , fontWeight:'bold'}}>Home</Text>,
        tabBarIcon:({focused})=><Fontawesome name="home" size={22} color={focused ? 'white': 'grey'}/>
      }} />


      <Screen name="Profile" component={Profile} options ={{
        tabBarLabel: ({focused})=><Text style={{color:focused ? 'white':'grey' , fontWeight:'bold'}}>Profile</Text>,
        tabBarIcon:({focused})=><Fontawesome name="user" size={22} color={focused ? 'white': 'grey'}/>
      }}/>


    </Navigator>
  );
}