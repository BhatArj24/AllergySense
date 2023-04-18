import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import the LinearGradient component

export default function App() {
  return (
    // Use LinearGradient as a wrapper for the View component to create a gray gradient background
    <LinearGradient colors={['#e0e0e0', '#c0c0c0']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Allergy Sense</Text>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
