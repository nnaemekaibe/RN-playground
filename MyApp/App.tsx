/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DefaultWelcome from './screens/defaultWelcome';
import Home from './screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={DefaultWelcome} />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{title: 'Playground'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
