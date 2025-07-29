import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { SignedIn } from '@clerk/clerk-expo'

const TabsLayout = () => {

    const {isSignedIn} = useAuth()
    if(!SignedIn) return <Redirect href={"/(auth)/sign-in"} />
  return (
    <Stack/>
  )
}

export default TabsLayout