import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FlipInYLeft } from 'react-native-reanimated';

interface PlayerTurnProps {
  playerName: string;
  currentPlayer: number;
  totalPlayers: number;
}

export function PlayerTurn({ playerName, currentPlayer, totalPlayers }: PlayerTurnProps) {
  return (
    <Animated.View 
      entering={FadeInDown.delay(300)} 
      style={styles.container}
    >
      <Animated.View 
        entering={FlipInYLeft} 
        style={styles.playerInfo}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={24} color="white" />
        </View>
        <Text style={styles.playerName}>{playerName}</Text>
      </Animated.View>
      
      <Text style={styles.turnInfo}>
        Turn {currentPlayer} of {totalPlayers}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 15,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  turnInfo: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});