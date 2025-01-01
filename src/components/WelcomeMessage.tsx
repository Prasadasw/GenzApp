import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function WelcomeMessage() {
  return (
    <Text style={styles.text}>Welcome to React Native!</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});