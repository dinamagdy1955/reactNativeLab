import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



export default function Profile() {
  return (
    <View style={styles.container}>
        <Text style={styles.helloProfile}>Hello from the profile page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex:"1"
  },
  helloProfile: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
