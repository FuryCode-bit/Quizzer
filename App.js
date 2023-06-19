import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import Quiz from './screens/Quiz';
import DefinePlayers from './screens/DefinePlayers';
import Define2Players from './screens/Define2Players';
import DefineGame from './screens/DefineGame';
import FixedQuiz from './screens/FixedQuiz';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="DefinePlayer" component={DefinePlayers} />
        <Stack.Screen name="Define2Player" component={Define2Players} />
        <Stack.Screen name="DefineGame" component={DefineGame} />
        <Stack.Screen name="FixedQuiz" component={FixedQuiz} />
        {/* <Stack.Screen name="Classificações" component={Classificações} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;