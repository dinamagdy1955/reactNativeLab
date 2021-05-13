import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from '../components/posts'
import Home from '../components/home'
import Fontawesome from '@expo/vector-icons/FontAwesome'
import { View , Text} from 'react-native';
import PostDetails from '../components/postDetails';
const { Navigator, Screen } = createStackNavigator();

export default function StackNav() {
  return (
    <Navigator screenOptions={{ headerStyle: { backgroundColor: 'purple' } }}>
      <Screen name="Home" component={Home}
        options={{
          title: 'Blog Posts',
          headerTitle:(<Text><Fontawesome name="home" size={22} color={'white'}/> <Text>Blog Posts</Text></Text>),
          headerTitleStyle: { color: 'white', fontSize: 22 },
        }} />
      <Screen name="Posts" component={Posts} 
        options={{
          title: 'All Posts',
          headerBackVisible: false,
          headerBackImage:null,
          headerTitle:(<Text><Fontawesome name="home" size={22} color={'white'}/> <Text>Blog Posts</Text></Text>),
          headerTitleStyle: { color: 'white', fontSize: 22 },
        }}/>
        <Screen name="PostDetails" component={PostDetails}
        options={{
          title: 'Post Details',
          headerBackVisible: false,
          headerBackImage:null,
          headerTitle:(<Text><Fontawesome name="home" size={22} color={'white'}/> <Text>Post Details</Text></Text>),
          headerTitleStyle: { color: 'white', fontSize: 22 },
        }} />
    </Navigator>
  );
}