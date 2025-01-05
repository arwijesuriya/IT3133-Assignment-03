import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UoV Student Care'>
          <Stack.Screen name='UOV Student Care' component={Login} />    
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}