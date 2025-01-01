import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import GenderScreen from '../screens/GenderScreen';
import GameSelectionScreen from '../screens/GameSelectionScreen';
import GameScreen from '../screens/GameScreen';
import DiceGameScreen from '../screens/DiceGameScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="GameSelection" component={GameSelectionScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="DiceGame" component={DiceGameScreen} />
    </Stack.Navigator>
  );
}