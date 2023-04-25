import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const [code, setCode] = useState("");
  const [username, setUsername] = useState(route?.params?.username);
  const navigation = useNavigation();
  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onResendPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was resent successfully");

    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.header}>Confirm Email</Text>
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


        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

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

export default ConfirmEmailScreen;
