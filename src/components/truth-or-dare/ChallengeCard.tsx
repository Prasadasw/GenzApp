import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FlipInEasyX } from 'react-native-reanimated';

interface ChallengeCardProps {
  type: 'truth' | 'dare';
  challenge: string;
}

export function ChallengeCard({ type, challenge }: ChallengeCardProps) {
  const config = {
    truth: {
      icon: 'heart-circle',
      colors: ['#FF69B4', '#FF1493'],
      title: 'Truth',
    },
    dare: {
      icon: 'flame',
      colors: ['#FF4B2B', '#FF416C'],
      title: 'Dare',
    },
  };

  const { icon, colors, title } = config[type];

  return (
    <Animated.View 
      entering={FadeIn.delay(300).and(FlipInEasyX)}
      style={styles.container}
    >
      <LinearGradient colors={colors} style={styles.card}>
        <View style={styles.header}>
          <Ionicons name={icon} size={30} color="white" />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.challenge}>{challenge}</Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  challenge: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 28,
  },
});