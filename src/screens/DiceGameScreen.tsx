import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SpinWheel } from '../components/dice-game/SpinWheel';
import { GameControls } from '../components/dice-game/GameControls';
import { ResultDisplay } from '../components/dice-game/ResultDisplay';
import { useSpinAnimation } from '../hooks/useSpinAnimation';
import { ACTIONS, BODY_PARTS } from '../data/game-data';

export default function DiceGameScreen() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const { spinAngle: actionAngle, spin: spinAction } = useSpinAnimation();
  const { spinAngle: bodyAngle, spin: spinBody } = useSpinAnimation();
  
  const handleSpin = () => {
    spinAction();
    spinBody();
    setCurrentPlayer(prev => prev === 1 ? 2 : 1);
  };

  return (
    <LinearGradient colors={['#845EC2', '#D65DB1']} style={styles.container}>
      <Text style={styles.title}>Dice to Spice</Text>
      <Text style={styles.playerTurn}>Player {currentPlayer}'s Turn</Text>
      
      <View style={styles.wheelsContainer}>
        <SpinWheel
          title="Actions"
          angle={actionAngle}
          items={ACTIONS}
        />
        <SpinWheel
          title="Body Parts"
          angle={bodyAngle}
          items={BODY_PARTS}
        />
      </View>
      
      <GameControls onSpin={handleSpin} />
      <ResultDisplay actionAngle={actionAngle} bodyAngle={bodyAngle} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  playerTurn: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  wheelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
});