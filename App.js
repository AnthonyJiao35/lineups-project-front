import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './src/components/CustomButton';
import { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import TestScreen from './src/screens/TestScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MyAccountScreen from './src/screens/MyAccountScreen';
import FooterMenu from './src/components/FooterMenu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginOrRegisterScreen from './src/screens/LoginOrRegisterScreen';
import { AuthContext, AuthProvider } from './src/utils/AuthContext';
import { MainScreen } from './src/screens/MainScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{
          header: null,
          headerShown: false,
        }}>
          <Stack.Screen name="LoginOrRegister" component={LoginOrRegisterScreen} options={{ header: () => null }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ header: () => null }} />
          <Stack.Screen name="Main" component={MainScreen} options={{ header: () => null }} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    borderWidth: 1,
    padding: 8,
  },
  countText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  dataList: {
    padding: 8,
  },
});
