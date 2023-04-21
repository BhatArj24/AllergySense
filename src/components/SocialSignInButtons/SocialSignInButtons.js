import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onSignInWithGooglePressed = () => {
        console.warn("Sign In with Google Pressed");
      };
      const onSignInWithApplePressed = () => {
        console.warn("Sign In with Apple Pressed");
      };

    return (
    <>
      <CustomButton
          text="Sign In with Google"
          onPress={onSignInWithGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInWithApplePressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButtons