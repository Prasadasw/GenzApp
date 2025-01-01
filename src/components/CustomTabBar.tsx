import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.tabButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons 
            name={state.index === 0 ? "home" : "home-outline"} 
            size={24} 
            color={state.index === 0 ? "#FF6B6B" : "#666"}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons 
            name={state.index === 1 ? "settings" : "bar-chart-outline"} 
            size={24} 
            color={state.index === 1 ? "#FF6B6B" : "#666"}
          />
          </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabButton}
          onPress={() => navigation.navigate('Gameselection')}
         >
          <Ionicons 
            name={state.index === 1 ? "Gameselection" : "settings-outline"} 
            size={24} 
            color={state.index === 1 ? "#FF6B6B" : "#666"}
          />
        </TouchableOpacity>
      </View>
      {/* <ion-icon name="bar-chart-outline"></ion-icon> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    marginBottom: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});