import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GameCard } from '../../components/truth-or-dare/GameCard';
import { PlayerTurn } from '../../components/truth-or-dare/PlayerTurn';
import { ActionButtons } from '../../components/truth-or-dare/ActionButtons';
import { useRoute } from '@react-navigation/native';
import { useTruthOrDare } from '../../hooks/useTruthOrDare';

export default function TruthGameScreen() {
  const route = useRoute();
  const { players } = route.params;
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<'truth' | 'dare' | null>(null);
  
  const { 
    currentChallenge,
    generateChallenge,
    completeChallenge,
    skipChallenge 
  } = useTruthOrDare();

  const handleTypeSelect = (type: 'truth' | 'dare') => {
    setSelectedType(type);
    generateChallenge(type);
  };

  const handleNext = (completed: boolean) => {
    if (completed) {
      completeChallenge();
    } else {
      skipChallenge();
    }
    
    setSelectedType(null);
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };

  return (
    <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.container}>
      <PlayerTurn 
        playerName={players[currentPlayerIndex].name}
        totalPlayers={players.length}
        currentPlayer={currentPlayerIndex + 1}
      />

      {!selectedType ? (
        <View style={styles.cardContainer}>
          <GameCard
            type="truth"
            onSelect={() => handleTypeSelect('truth')}
          />
          <GameCard
            type="dare"
            onSelect={() => handleTypeSelect('dare')}
          />
        </View>
      ) : (
        <>
          <View style={styles.challengeContainer}>
            {currentChallenge && (
              <ChallengeCard
                type={selectedType}
                challenge={currentChallenge}
              />
            )}
          </View>
          <ActionButtons
            onComplete={() => handleNext(true)}
            onSkip={() => handleNext(false)}
          />
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
  },
  challengeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});