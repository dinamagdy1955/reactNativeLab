import React from 'react';
import { View, Text,Image } from 'react-native';
import {useRoute} from '@react-navigation/native';


export default function PostDetails() {
    const post  = useRoute();
    const postData = post.params.data;
    return (
        <View style={{ flex: 1, width: '95%', margin: 'auto',paddingTop:20,paddingBottom:20 }}>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{width:"95%",height:"130px",borderRadius:"15px",marginBottom:"2%"}}/>
            <Text style={{ color: 'purple',fontSize: 20, fontWeight:"bold",fontFamily:"arial", textAlign:'center' }}>{postData.title}</Text>
            <Text style={{ color: 'grey',fontSize: 16,fontFamily:"arial" }}>{postData.body}</Text>
        </View>
    );
}