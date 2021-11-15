import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from 'react-native-screens/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function getScreenOptions(): NativeStackNavigationOptions {
  return {
    contentStyle: {
      backgroundColor: 'transparent',
    },
  };
}
