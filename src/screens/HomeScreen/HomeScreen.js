import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {Auth} from 'aws-amplify';
import Menu from '../../images/Menu.png'
import HomePageLogo from '../../images/HomePageLogo.png'
import Camera from '../../images/Camera.png'

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut()
  };

  return (
    <View>
        <View style={styles.navbar}>
          <Image source={Menu} style={styles.menu} />
          <Image source={HomePageLogo} style={styles.homepagelogo}/>
          <Image source={Camera} style={styles.camera}/>
        </View>
      <Text style={{width:"100%",textAlign:"center", color:"red",marginTop:100, fontSize:20}} onPress={signOut}>
        Sign Out
      </Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  navbar: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 28,
    position: "absolute",
    width: 395,
    height: 115,
    left: 0,
    top: 0,
    backgroundColor: "#6F2DBD",
    borderWidth: 1,
    borderColor: "#000000",
  },
  menu: {
    flex: "none",
    order: 0,
    flexGrow: 0,
    width: 35,
    marginTop: 25,
  },
  homepagelogo: {
    width: 214.47,
    height: 43.6,

    flex: "none",
    order: 1,
    flexGrow: 0,
    marginTop: 25,

  },
  camera: {
    width: 46,
    height: 46,

    flex: "none",
    order: 2,
    flexGrow: 0,
    marginTop: 25,

  },
});


export default HomeScreen;

