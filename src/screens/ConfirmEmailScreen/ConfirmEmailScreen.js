import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState("");
  const navigation = useNavigation();
  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onResendPressed = () => {
    console.warn("Resend Code Pressed");  
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.header}>Confirm Email</Text>
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
