import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {

  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate('NewPassword')
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.header}>Reset Password</Text>
        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />


        <CustomButton text="Send" onPress={onSendPressed} />


        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 50,
    marginTop: 50,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "blue",
  },
});

export default ForgotPasswordScreen;
