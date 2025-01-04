import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GameCard } from '../components/GameCard';
import { useNavigation } from '@react-navigation/native';

export default function GameSelectionScreen() {
  const navigation = useNavigation();

  const games = [
    {
      id: 'scratch',
      title: 'Sex Scratch Adventure',
      description: 'Recreate sex positions, complete indoor and outdoor locations, try d*rty extras and get rewarded for each completed challenge.',
      icon: 'heart',
      colors: ['#FF6B6B', '#4ECDC4'],
      disabled: false,
    },
    {
      id: 'dice',
      title: 'Dice to Spice',
      description: 'Each player takes turns spinning the wheels, one determining an action and the other specifying a body part.',
      icon: 'game-controller',
      colors: ['#845EC2', '#D65DB1'],
      disabled: false,
    },
    {
      id: 'distance',
      title: 'Long Distance Game',
      description: 'Send affectionate, cute, or even naughty notifications to your partners device, instantly capturing their attention.',
      icon: 'heart-half',
      colors: ['#FF9671', '#FFC75F'],
      disabled: false,
    }
  ];

  return (
    <LinearGradient
      colors={['#1A1A1A', '#2D2D2D']}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.header}>Choose Your Game</Text>
        <Text style={styles.subheader}>Select an exciting adventure to begin</Text>
        
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.description}
            icon={game.icon}
            colors={game.colors}
            disabled={game.disabled}
            onPress={() => {
              if (game.id === 'scratch') {
                navigation.navigate('Home');
              } else if (game.id === 'dice') {
                navigation.navigate('DicePlayerSetupScreen');
              } else if (game.id == 'distance'){
                navigation.navigate('GameTypeScreen');
              }
            }}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 30,
    textAlign: 'center',
  },
});