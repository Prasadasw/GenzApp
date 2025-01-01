import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GenderScreen() {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);

  const genderOptions = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Gender</Text>
      <View style={styles.optionsContainer}>
        {genderOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.option,
              selectedGender === option.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedGender(option.id)}
          >
            <Text
              style={[
                styles.optionText,
                selectedGender === option.id && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedGender && styles.disabledButton,
        ]}
        disabled={!selectedGender}
        onPress={() => navigation.navigate('GameSelectionScreen')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  optionsContainer: {
    gap: 15,
  },
  option: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#FF6B6B',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#4ECDC4',
    padding: 15,
    borderRadius: 25,
    marginTop: 40,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});