import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter

ColorCounter.propTypes = {
  color: PropTypes.string,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
}