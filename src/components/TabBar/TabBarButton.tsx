import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { TabBarIcon } from './TabBarIcon';

interface TabBarButtonProps {
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
}

export function TabBarButton({ routeName, isFocused, onPress }: TabBarButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.tabButton} 
      onPress={onPress}
    >
      <TabBarIcon 
        routeName={routeName}
        isFocused={isFocused}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});