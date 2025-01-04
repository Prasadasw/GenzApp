import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { PlayerInput } from '../../components/truth-or-dare/PlayerInput';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PlayerSetupScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { gameType } = route.params;
  const [players, setPlayers] = useState([{ id: 1, name: '' }, { id: 2, name: '' }]);

  const addPlayer = () => {
    if (gameType === 'group' && players.length < 10) {
      setPlayers([...players, { id: players.length + 1, name: '' }]);
    }
  };

  const updatePlayerName = (id: number, name: string) => {
    setPlayers(players.map(player => 
      player.id === id ? { ...player, name } : player
    ));
  };

  const isValid = players.every(player => player.name.trim());

  const startGame = () => {
    if (isValid) {
      navigation.navigate('NewDicescreen', { players });
    }
  };

  return (
    <LinearGradient 
      colors={gameType === 'couple' ? ['#FF69B4', '#FF1493'] : ['#4A90E2', '#357ABD']} 
      style={styles.container}
    >
      <ScrollView>
        <Animated.View entering={FadeInDown.delay(300)} style={styles.content}>
          <Text style={styles.title}>
            {gameType === 'couple' ? 'Enter Your Names' : 'Add Players'}
          </Text>
          
          {players.map((player, index) => (
            <PlayerInput
              key={player.id}
              label={`Player ${index + 1}`}
              value={player.name}
              onChange={(name) => updatePlayerName(player.id, name)}
            />
          ))}

          {gameType === 'group' && players.length < 10 && (
            <PrimaryButton
              title="Add Player"
              onPress={addPlayer}
              variant="secondary"
            />
          )}

          <PrimaryButton
            title="Start Game"
            onPress={startGame}
            disabled={!isValid}
          />
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});