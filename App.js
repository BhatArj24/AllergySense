import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component
import SignInScreen  from './src/screens/SignInScreen/SignInScreen';

export default function App() {
  return (
    // Use LinearGradient as a wrapper for the View component to create a gray gradient background
    
      <View style={styles.root}>
        <SignInScreen />
      </View>

  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: "#f9fbfc"
  }
});
