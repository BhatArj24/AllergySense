<<<<<<< Updated upstream
import { View, Text } from 'react-native'
import React from 'react'
import {Auth} from 'aws-amplify';

=======
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Auth} from 'aws-amplify';



>>>>>>> Stashed changes
const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut()
  };

  return (
    <View>
<<<<<<< Updated upstream
=======
        <View style={styles.navbar}>

        </View>
>>>>>>> Stashed changes
      <Text style={{fontSize:24, alignSelf:"center", marginTop:50}}>Home, sweet home</Text>
      <Text style={{width:"100%",textAlign:"center", color:"red",marginTop:50, fontSize:20}} onPress={signOut}>
        Sign Out
      </Text>
    </View>
<<<<<<< Updated upstream
  )
}

export default HomeScreen
=======
    
  )
}
const styles = StyleSheet.create({
    navbar: {
        boxSizing: "border-box",
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "12px",
    paddingHorizontal: "20px",
    gap:"40px",
    
    position:"absolute",
    width: "388px",
    height: "68px",
    left: "0px",
    top: "0px",
    
    /* Primary */
    
    background: "##6F2DBD",
    border: "1px solid #000000"
      }
  });

export default HomeScreen

>>>>>>> Stashed changes
