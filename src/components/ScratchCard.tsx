import React, { useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType, Animated } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { RevealPopup } from './RevealPopup';
import { ScratchPattern } from './ScratchPattern';
import { LinearGradient } from 'expo-linear-gradient';

interface ScratchCardProps {
  image: ImageSourcePropType;
  isSelected: boolean;
}

export default function ScratchCard({ image, isSelected }: ScratchCardProps) {
  const [scratched, setScratched] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const scratchProgress = useRef(new Animated.Value(0)).current;
  const scratchedAreas = useRef(new Set()).current;

  const handleScratch = (event: PanGestureHandlerGestureEvent) => {
    if (!isSelected || scratched) return;

    const { x, y } = event.nativeEvent;
    const gridX = Math.floor(x / 20);
    const gridY = Math.floor(y / 20);
    const key = `${gridX}-${gridY}`;

    if (!scratchedAreas.has(key)) {
      scratchedAreas.add(key);
      const progress = scratchedAreas.size / 100; // Adjust denominator based on card size
      
      Animated.spring(scratchProgress, {
        toValue: progress,
        tension: 40,
        friction: 5,
        useNativeDriver: true,
      }).start();

      if (progress >= 0.7 && !scratched) {
        setScratched(true);
        setShowPopup(true);
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setScratched(false);
    scratchedAreas.clear();
    scratchProgress.setValue(0);
  };

  return (
    <>
      <PanGestureHandler onGestureEvent={handleScratch}>
        <View style={styles.container}>
          <Image 
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
          {!scratched && (
            <Animated.View 
              style={[
                styles.overlay,
                {
                  opacity: scratchProgress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  })
                }
              ]}
            >
              <LinearGradient
                colors={['#D1D1D1', '#E5E5E5', '#D1D1D1']}
                style={StyleSheet.absoluteFill}
              />
              <ScratchPattern />
              <Text style={styles.scratchText}>
                {isSelected ? '' : ''}
              </Text>
            </Animated.View>
          )}
        </View>
      </PanGestureHandler>

      <RevealPopup
        visible={showPopup}
        image={image}
        onClose={handleClosePopup}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scratchText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255,255,255,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});