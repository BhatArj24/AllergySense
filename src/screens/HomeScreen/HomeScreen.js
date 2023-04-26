import { View, Text } from 'react-native'
import React from 'react'
import {Auth} from 'aws-amplify';

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut()
  };

  return (
    <View>
      <Text style={{fontSize:24, alignSelf:"center", marginTop:50}}>Home, sweet home</Text>
      <Text style={{width:"100%",textAlign:"center", color:"red",marginTop:50, fontSize:20}} onPress={signOut}>
        Sign Out
      </Text>
    </View>
  )
}

export default HomeScreen