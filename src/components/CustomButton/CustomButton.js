import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor:bgColor} : {}]} onPress={onPress}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color:fgColor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding:15,
        marginTop: 25,
        alignItems: "center",
        borderRadius: 5,
    },
    text:{
        fontWeight: "bold",
        color: "white",
    },
    container_PRIMARY:{
        backgroundColor:"#6F2DBD",
    },
    container_TERTIARY:{
    },
    text_TERTIARY:{
        color:"grey",
    },
    container_SECONDARY:{
        borderColor: "#6F2DBD",
        borderWidth: 2,
    },
    text_SECONDARY:{
      color: "#6F2DBD",
    },
})






export default CustomButton