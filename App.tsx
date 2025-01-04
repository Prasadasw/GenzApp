import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GameScreen from './src/screens/GameScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { CustomTabBar } from './src/components/CustomTabBar';
import GameSelectionScreen from './src/screens/GameSelectionScreen';
import DiceGameScreen from './src/screens/DiceGameScreen';
import DicePlayerSetupScreen from './src/screens/DicePlayerSetupScreen';
import TruthGameScreen from './src/screens/TruthOrDare/TruthGameScreen';
import GameTypeScreen from './src/screens/TruthOrDare/GameTypeScreen';
import PlayerSetupScreen from './src/components/truth-or-dare/PlayerSetupScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name='Gameselection' component={GameSelectionScreen} />
            <Tab.Screen name="Home" component={GameScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="DiceGameScreen" component={DiceGameScreen} />
            <Tab.Screen name="DicePlayerSetupScreen" component={DicePlayerSetupScreen} />
            <Tab.Screen name="NewDicescreen" component={TruthGameScreen} />
            <Tab.Screen name='TruthGameScreen' component={TruthGameScreen} />
            <Tab.Screen name='GameTypeScreen' component={GameTypeScreen} />
            <Tab.Screen name='PlayerSetupScreen' component={PlayerSetupScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}