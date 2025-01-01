import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ScratchCard from '../components/ScratchCard';
import { images } from '../../utils/images';

export default function GameScreen() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, image: images.image1 },
    { id: 2, image: images.image2 },
    { id: 3, image: images.image3 },
    { id: 4, image: images.image4 },
    { id: 5, image: images.image5 },
    { id: 6, image: images.image6 },
  ];

  return (
    <LinearGradient
      colors={['#FF6B6B', '#4ECDC4']}
      style={styles.container}
    >
      <Text style={styles.title}>Adventure Cards</Text>
      <Text style={styles.subtitle}>Scratch to reveal your next adventure!</Text>
      
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => setSelectedCard(card.id)}
            style={[
              styles.cardWrapper,
              selectedCard === card.id && styles.selectedCard,
            ]}
          >
            <ScratchCard
              image={card.image}
              isSelected={selectedCard === card.id}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
     
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
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    gap: 15,
    paddingBottom: 20,
    
  },
  card: {
    width: 100, // Set width to make the card a square
    height: 100, // Set height to make the card a square
    borderRadius: 50, // Half of the width/height to make it round
    backgroundColor: '#FFFFFF', // Optional: set a background color
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    shadowColor: '#000', // Optional: add shadow for a better look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  
  cardWrapper: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  selectedCard: {
    transform: [{ scale: 1.05 }],
    elevation: 5,
  },
});