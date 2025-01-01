import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface GameControlsProps {
  onSpin: () => void;
}

export function GameControls({ onSpin }: GameControlsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.spinButton}
        onPress={onSpin}
      >
        <Ionicons name="refresh" size={24} color="white" />
        <Text style={styles.buttonText}>SPIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  spinButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    gap: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});