import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
  return (
    <View style={styles.Seperator}>
        <Text>Seperator</Text>
    </View>
  )
}
export default Seperator;
const styles = StyleSheet.create({
    Seperator:{
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})