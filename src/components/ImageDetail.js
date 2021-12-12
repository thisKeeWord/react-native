import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import PropTypes from 'prop-types'

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default ImageDetail

ImageDetail.propTypes = {
  title: PropTypes.string,
  // imageSouce should be the evaluated result from `require(file)`
  imageSource: PropTypes.any,
}
