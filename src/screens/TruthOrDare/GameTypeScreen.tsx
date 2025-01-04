import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { GameTypeCard } from '../../components/truth-or-dare/GameTypeCard';
import { useNavigation } from '@react-navigation/native';

export default function GameTypeScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#FF6B6B', '#4ECDC4']} style={styles.container}>
      <Animated.View entering={FadeInDown.delay(300)} style={styles.content}>
        <GameTypeCard
          title="Couple Game"
          description="Intimate questions and dares for couples"
          icon="heart"
          onPress={() => navigation.navigate('PlayerSetupScreen', { gameType: 'couple' })}
          colors={['#FF69B4', '#FF1493']}
        />
        <GameTypeCard
          title="Group Game"
          description="Fun challenges for friends and parties"
          icon="people"
          onPress={() => navigation.navigate('PlayerSetupScreen', { gameType: 'group' })}
          colors={['#4A90E2', '#357ABD']}
        />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
});