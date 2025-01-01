import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Path, G, Text as SvgText } from 'react-native-svg';

interface SpinWheelProps {
  title: string;
  angle: Animated.Value;
  items: string[];
}

export function SpinWheel({ title, angle, items }: SpinWheelProps) {
  const rotateStyle = {
    transform: [{
      rotate: angle.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
      })
    }]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Animated.View style={[styles.wheel, rotateStyle]}>
        <Svg height="200" width="200" viewBox="0 0 100 100">
          {items.map((item, index) => {
            const angle = (360 / items.length) * index;
            return (
              <G key={index} rotation={angle} origin="50, 50">
                <Path
                  d="M50 50 L50 0 A50 50 0 0 1 85 15 Z"
                  fill={index % 2 ? '#FF6B6B' : '#4ECDC4'}
                />
                <SvgText
                  x="65"
                  y="25"
                  fill="white"
                  fontSize="8"
                  textAnchor="middle"
                  transform={`rotate(${-angle})`}
                >
                  {item}
                </SvgText>
              </G>
            );
          })}
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  wheel: {
    width: 200,
    height: 200,
  },
});