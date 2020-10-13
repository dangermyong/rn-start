import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length > 5 ? null : <Text>Password must be longer than 5 characters</Text>}
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
