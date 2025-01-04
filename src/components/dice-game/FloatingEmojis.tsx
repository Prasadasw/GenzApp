import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const EMOJIS = ['💋', '❤️', '💕', '💘', '💝'];

function FloatingEmoji({ delay, emoji }: { delay: number; emoji: string }) {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(-200, { duration: 3000 }),
          withTiming(0, { duration: 0 })
        ),
        -1
      )
    );

    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 500 }),
          withTiming(1, { duration: 2000 }),
          withTiming(0, { duration: 500 }),
          withTiming(0, { duration: 0 })
        ),
        -1
      )
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.Text style={[styles.emoji, style]}>
      {emoji}
    </Animated.Text>
  );
}

export function FloatingEmojis() {
  return (
    <View style={StyleSheet.absoluteFill}>
      {EMOJIS.map((emoji, index) => (
        <View
          key={index}
          style={[
            styles.emojiContainer,
            { left: `${15 + (index * 20)}%` }
          ]}
        >
          <FloatingEmoji
            emoji={emoji}
            delay={index * 1000}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  emojiContainer: {
    position: 'absolute',
    bottom: 0,
  },
  emoji: {
    fontSize: 24,
  },
});