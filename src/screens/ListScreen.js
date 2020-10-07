import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
  const freinds = [
    { name: 'Friend #1', age:'20' },
    { name: 'Friend #2', age:'45' },
    { name: 'Friend #3', age:'50' },
    { name: 'Friend #4', age:'20' },
    { name: 'Friend #5', age:'25' },
    { name: 'Friend #6', age:'27' },
    { name: 'Friend #7', age:'28' },
    { name: 'Friend #8', age:'21' },
    { name: 'Friend #10', age:'23' },
  ]

  return (
    <FlatList 
      keyExtractor={ friend => friend.name }
      data={freinds} 
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}/>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
    marginVertical: 40
  }
})

export default ListScreen
