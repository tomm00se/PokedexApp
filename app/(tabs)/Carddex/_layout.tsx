import React from 'react'
import { Stack } from 'expo-router'

const CarddexLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  )
}

export default CarddexLayout