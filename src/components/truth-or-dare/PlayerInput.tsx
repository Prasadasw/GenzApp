import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface PlayerInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function PlayerInput({ label, value, onChange }: PlayerInputProps) {
  return (
    <Animated.View entering={FadeInRight} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Enter name..."
        placeholderTextColor="rgba(255,255,255,0.5)"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
});