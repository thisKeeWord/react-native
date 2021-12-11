import React from 'react'
import { View, Text, Stylesheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 20 },
    { name: 'Friend #6', age: 20 },
    { name: 'Friend #7', age: 20 },
    { name: 'Friend #8', age: 20 },
    { name: 'Friend #9', age: 20 },
  ]


  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      )}
    >
      List Screen
    </FlatList>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen