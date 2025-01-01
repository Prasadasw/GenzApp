import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface TabBarIconProps {
  routeName: string;
  isFocused: boolean;
}

export function TabBarIcon({ routeName, isFocused }: TabBarIconProps) {
  const iconConfig = {
    Home: {
      name: isFocused ? 'home' : 'home-outline',
    },
    Stats: {
      name: isFocused ? 'bar-chart' : 'bar-chart-outline',
    },
    Games: {
      name: isFocused ? 'game-controller' : 'game-controller-outline',
    }
  };

  const config = iconConfig[routeName] || iconConfig.Home;

  return (
    <Ionicons 
      name={config.name}
      size={24}
      color={isFocused ? "#FF6B6B" : "#666"}
    />
  );
}