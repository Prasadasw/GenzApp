import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FloatingEmojis } from '../components/dice-game/FloatingEmojis';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function DicePlayerSetupScreen() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const navigation = useNavigation();

  const handleProceed = () => {
    if (player1Name && player2Name) {
      navigation.navigate('DiceGameScreen', {
        player1Name,
        player2Name
      });
    }
  };

  return (
    <LinearGradient colors={['#845EC2', '#D65DB1']} style={styles.container}>
      <FloatingEmojis />
      
      <Animated.View entering={FadeInDown.delay(300)} style={styles.header}>
        <Text style={styles.title}>Who's Playing?</Text>
        <Text style={styles.subtitle}>Enter your names to begin the fun!</Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(600)} style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Player 1</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={player1Name}
            onChangeText={setPlayer1Name}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Player 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={player2Name}
            onChangeText={setPlayer2Name}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            (!player1Name || !player2Name) && styles.buttonDisabled
          ]}
          onPress={handleProceed}
          disabled={!player1Name || !player2Name}
        >
          <Text style={styles.buttonText}>Let's Play!</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#845EC2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});