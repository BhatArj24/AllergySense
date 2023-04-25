import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email, preferred_username: username
        },
      });
      navigation.navigate("ConfirmEmail",{username});
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    // navigation.navigate("ConfirmEmail");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy Pressed");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.header}>Create an Account</Text>
        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder={"Confirm Password"}
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{" "}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />

        <CustomButton
          text="Have an Account? Sign In"
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

export default SignUpScreen;
