import { useRef } from 'react';
import { Animated } from 'react-native';

export function useSpinAnimation() {
  const spinAngle = useRef(new Animated.Value(0)).current;

  const spin = () => {
    const randomRotations = Math.floor(Math.random() * 5) + 5; // 5-10 rotations
    const endAngle = 360 * randomRotations + Math.random() * 360;

    spinAngle.setValue(0);
    Animated.timing(spinAngle, {
      toValue: endAngle,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return { spinAngle, spin };
}