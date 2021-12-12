import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const ImageDetail = (props) => {
  return (
    <Text>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default ImageDetail

ImageDetail.propTypes = {
  title: PropTypes.string
}
