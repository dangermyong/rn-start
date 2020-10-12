import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
})
