import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import Navigation from './src/navigation/Navigation'
import { store } from './src/store/index'

export default function App() {
  return (
    <SafeAreaProvider className='bg-blue-200'>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  )
}
