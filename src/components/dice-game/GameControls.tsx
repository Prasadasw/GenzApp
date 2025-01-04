import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

interface GameControlsProps {
  onSpin: () => void;
}

export function GameControls({ onSpin }: GameControlsProps) {
  return (
    <View style={styles.container}>
      <Animated.View entering={BounceIn.delay(800)}>
        <TouchableOpacity 
          style={styles.spinButton}
          onPress={onSpin}
        >
          <LinearGradient
            colors={['#FF69B4', '#FF1493']}
            style={styles.gradient}
          >
            <Ionicons name="refresh" size={24} color="white" />
            <Text style={styles.buttonText}>SPIN THE LOVE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  spinButton: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});