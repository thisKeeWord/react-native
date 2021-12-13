import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <View>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => setName(e)}
          value={name}
        />
        <Text>My name is {name}</Text>
      </View>

      <View style={styles.passwordView}>
        <Text>Enter Password:</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(e) => setPassword(e)}
          value={password}
        />
        {!!password && password.length < 4 && (
          <Text>Password must be 4 characters</Text>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  passwordView: {
    marginTop: 10,
    borderTopWidth: 1,
    width: '100%'
  },
  input: {
    margin: 15,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default TextScreen