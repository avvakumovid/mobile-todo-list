import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from './src/navigation/Navigation'
import { persistor, store } from './src/store/index'

export default function App() {
  return (
    <SafeAreaProvider className='bg-blue-200'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}
