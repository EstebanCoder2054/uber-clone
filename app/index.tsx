import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect } from 'expo-router'

// entry point of the app

const Home = () => {
  return (
    <Redirect href="/(auth)/welcome" />
  )
}

export default Home