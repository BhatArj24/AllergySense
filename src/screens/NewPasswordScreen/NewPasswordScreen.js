import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const onSubmitPressed = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      navigation.navigate("SignIn");
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
          placeholder={"Enter Username"}
          value={username}
          setValue={setUsername}
        />
        
        <CustomInput
          placeholder={"Enter Confirmation Code"}
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder={"Enter New Password"}
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
