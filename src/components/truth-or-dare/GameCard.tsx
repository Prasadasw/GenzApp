import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';

interface GameCardProps {
  type: 'truth' | 'dare';
  onSelect: () => void;
}

export function GameCard({ type, onSelect }: GameCardProps) {
  const config = {
    truth: {
      title: 'Truth',
      icon: 'heart-circle',
      colors: ['#FF69B4', '#FF1493'],
      description: 'Answer honestly...',
    },
    dare: {
      title: 'Dare',
      icon: 'flame',
      colors: ['#FF4B2B', '#FF416C'],
      description: 'Accept the challenge!',
    },
  };

  const { title, icon, colors, description } = config[type];

  return (
    <Animated.View entering={FadeIn.delay(300).and(ZoomIn)}>
      <TouchableOpacity onPress={onSelect}>
        <LinearGradient colors={colors} style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={40} color="white" />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
  },
});