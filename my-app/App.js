import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import XSeries from "./screens/X_Series";
import NumberSeries from "./screens/NumberSeries";
import M_Series from "./screens/M_Series";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="X" component={XSeries} />
        <Stack.Screen name="Numbers" component={NumberSeries} />
        <Stack.Screen name="M" component={M_Series} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;