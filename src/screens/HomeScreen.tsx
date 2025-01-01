import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WelcomeMessage } from '../components/WelcomeMessage';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WelcomeMessage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});