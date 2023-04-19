import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../images/AllergySenseLogo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSignInPressed = () => {
        console.warn("Sign In Pressed");
    }
    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password Pressed");
    }

    const onSignInWithGooglePressed = () => {
        console.warn("Sign In with Google Pressed");
    }
    const onSignInWithApplePressed = () => {
        console.warn("Sign In with Apple Pressed");
    }

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height:height*0.2}]} resizeMode='contain'/>
      <Text style={styles.header}>Sign In</Text>
      <CustomInput placeholder={"Username"} value={username} setValue={setUsername} />
      <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry/>
      
      <CustomButton text="Sign In" onPress={onSignInPressed} />

      <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

      <CustomButton text="Sign In with Google" onPress={onSignInWithGooglePressed} bgColor="#FAE9EA" fgColor="#DD4D44" />

      <CustomButton text="Sign In with Apple" onPress={onSignInWithApplePressed} bgColor="#e3e3e3" fgColor="#363636" />


    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: "center",
        padding:20
    },
    logo:{
        width: "40%",
        maxWidth: 300,
        height: 100,
        marginTop: 60,
    },
    header:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 50,
    }
})

export default SignInScreen;