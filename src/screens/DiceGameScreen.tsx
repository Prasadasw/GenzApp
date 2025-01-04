import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SpinWheel } from '../components/dice-game/SpinWheel';
import { GameControls } from '../components/dice-game/GameControls';
import { ResultDisplay } from '../components/dice-game/ResultDisplay';
import { useSpinAnimation } from '../hooks/useSpinAnimation';
import { ACTIONS, BODY_PARTS } from '../data/game-data';
import { useRoute } from '@react-navigation/native';
import { FloatingEmojis } from '../components/dice-game/FloatingEmojis';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function DiceGameScreen() {
  const route = useRoute();
  const { player1Name = 'Player 1', player2Name = 'Player 2' } = route.params || {};
  const [currentPlayer, setCurrentPlayer] = useState(player1Name);
  const { spinAngle: actionAngle, spin: spinAction } = useSpinAnimation();
  const { spinAngle: bodyAngle, spin: spinBody } = useSpinAnimation();

  const scale = useSharedValue(1);

  const handleSpin = () => {
    scale.value = withSpring(1.1, {}, () => {
      scale.value = withSpring(1);
    });
    spinAction();
    spinBody();
    setCurrentPlayer((prev) => (prev === player1Name ? player2Name : player1Name));
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient colors={['#FF69B4', '#4A0080']} style={styles.container}>
      <FloatingEmojis />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown.delay(300)} style={styles.headerContainer}>
          <Text style={styles.title}>Romantic Dice Game</Text>
          <View style={styles.playerTurnContainer}>
            <Ionicons name="heart" size={24} color="#FF69B4" />
            <Text style={styles.playerTurn}>{currentPlayer}'s Turn</Text>
            <Ionicons name="heart" size={24} color="#FF69B4" />
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(600)}
          style={[styles.gameContainer, animatedStyle]}
        >
          <View style={styles.wheelsContainer}>
            <SpinWheel title="Actions" angle={actionAngle} items={ACTIONS} />
            <SpinWheel title="Body Parts" angle={bodyAngle} items={BODY_PARTS} />
          </View>

          <GameControls onSpin={handleSpin} />
          <ResultDisplay actionAngle={actionAngle} bodyAngle={bodyAngle} />
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  playerTurnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 15,
  },
  playerTurn: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  gameContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
  },
  wheelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});
