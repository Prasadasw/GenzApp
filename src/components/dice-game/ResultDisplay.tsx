import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ACTIONS, BODY_PARTS } from '../../data/game-data';
import { LinearGradient } from 'expo-linear-gradient';

interface ResultDisplayProps {
  actionAngle: Animated.Value;
  bodyAngle: Animated.Value;
}

export function ResultDisplay({ actionAngle, bodyAngle }: ResultDisplayProps) {
  const [result, setResult] = useState({ action: '', bodyPart: '' });

  useEffect(() => {
    const actionListener = actionAngle.addListener(({ value }) => {
      const index = Math.floor((value % 360) / (360 / ACTIONS.length));
      setResult(prev => ({ ...prev, action: ACTIONS[index] }));
    });

    const bodyListener = bodyAngle.addListener(({ value }) => {
      const index = Math.floor((value % 360) / (360 / BODY_PARTS.length));
      setResult(prev => ({ ...prev, bodyPart: BODY_PARTS[index] }));
    });

    return () => {
      actionAngle.removeListener(actionListener);
      bodyAngle.removeListener(bodyListener);
    };
  }, []);

  if (!result.action || !result.bodyPart) return null;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255,105,180,0.3)', 'rgba(255,20,147,0.3)']}
        style={styles.gradient}
      >
        <Text style={styles.resultText}>
          {result.action} the {result.bodyPart}
        </Text>
        <Text style={styles.emoji}>💕</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    padding: 20,
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  emoji: {
    fontSize: 24,
    marginTop: 10,
  },
});