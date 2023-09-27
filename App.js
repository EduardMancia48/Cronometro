import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CronometroApp from './components/CronometroApp'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cronometro">
        <Stack.Screen name="Cronometro" component={CronometroApp} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
