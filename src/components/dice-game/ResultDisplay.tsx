import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ACTIONS, BODY_PARTS } from '../../data/game-data';

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
      <Text style={styles.resultText}>
        {result.action} the {result.bodyPart}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});