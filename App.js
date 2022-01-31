import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/components/Navigation'
import screens from './src/screens'

export default function App() {
  return <Navigation screens={screens}></Navigation>
}
