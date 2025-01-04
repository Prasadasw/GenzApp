import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function PrimaryButton({ 
  title, 
  onPress, 
  disabled = false,
  loading = false,
  variant = 'primary'
}: PrimaryButtonProps) {
  const gradientColors = {
    primary: {
      default: ['#FF69B4', '#FF1493'],
      disabled: ['#D3D3D3', '#A9A9A9'],
    },
    secondary: {
      default: ['#4A90E2', '#357ABD'],
      disabled: ['#D3D3D3', '#A9A9A9'],
    },
  };

  const colors = disabled 
    ? gradientColors[variant].disabled 
    : gradientColors[variant].default;

  return (
    <Animated.View entering={FadeIn}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={[styles.button, disabled && styles.disabled]}
      >
        <LinearGradient
          colors={colors}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.text}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.7,
  },
});