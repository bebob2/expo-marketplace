import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
