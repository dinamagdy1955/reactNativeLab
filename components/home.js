import React from 'react';
import {View , TouchableOpacity , StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Home(){
  const Navigation = useNavigation();
  return(
    <View>
      <TouchableOpacity style={styles.btn} onPress={()=>Navigation.navigate("Posts")}> 
        GET POSTS
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor:'purple',
    width:"140px",
    textAlign:"center",
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
    borderRadius:"30px",
    padding: "15px",
    marginLeft:"35%",
    marginTop:"50%"
  }
});