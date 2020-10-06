import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const myName = 'Yongjae'

  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started with React Native
      </Text>
      <Text style={styles.contentStyle}>My name is {myName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  contentStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen