import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Defs, Pattern } from 'react-native-svg';
import { AnimatedText } from './AnimatedText';

export function ScratchPattern() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <Pattern
            id="scratch"
            patternUnits="userSpaceOnUse"
            width="40"
            height="40"
          >
            <Path
              d="M0 20 L40 20 M20 0 L20 40"
              stroke="#888888"
              strokeWidth="0.5"
            />
          </Pattern>
        </Defs>
        <Path
          d="M0 0 H100% V100% H0 Z"
          fill="url(#scratch)"
        />
      </Svg>
      <View style={styles.textContainer}>
        <AnimatedText text="Scratch" />
        <AnimatedText text="Card 💋" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});