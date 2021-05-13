import React from 'react';
import { TouchableOpacity, View, Image, Text, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Posts() {
  const [posts, setPosts] = React.useState([])
  const [init, setInit] = React.useState(true)
  const Navigation = useNavigation();
  const getPostsAsync = async () => {
    try {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      let json = await response.json();
      setPosts(json);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getPostsAsync();
  }, [init])

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => Navigation.navigate('PostDetails', { data: item })} key={item.id}>
      <View style={{borderBottomWidth:"5px"}}>
      <View style={{ width: '95%', margin: "auto", marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10,borderBottomColor:"black" }}>
        <Text style={{ fontFamily: "arial", color: 'grey', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>{item.title}</Text>
        <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{ width: "100%", height: "80px", borderRadius: 10, marginHorizontal: 'auto' }} />
      </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={posts}
      renderItem={Item}
    />
  )
}