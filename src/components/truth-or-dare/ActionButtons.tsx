import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp, SlideInRight } from 'react-native-reanimated';

interface ActionButtonsProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function ActionButtons({ onComplete, onSkip }: ActionButtonsProps) {
  return (
    <Animated.View 
      entering={FadeInUp.delay(500)}
      style={styles.container}
    >
      <TouchableOpacity 
        style={[styles.button, styles.skipButton]}
        onPress={onSkip}
      >
        <Ionicons name="close-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.completeButton]}
        onPress={onComplete}
      >
        <Ionicons name="checkmark-circle" size={24} color="white" />
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    gap: 8,
  },
  skipButton: {
    backgroundColor: '#FF4B2B',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});