import React from 'react'
import { StyleSheet, View, Button, Text, } from 'react-native'

const BoxScreen = () => {

  return (
    <View style={styles.parentStyle}>
      <View styles={styles.viewOneStyle} />
      <View styles={styles.viewTwoStyle} />
      <View styles={styles.viewThreeStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginTop: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  },
})

export default BoxScreen
