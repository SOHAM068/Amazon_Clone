import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import ProductItems from '../components/ProductItems'
import Seperator from '../components/Seperator'

import { Product_List } from '../data/constants'

type productaProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation} : productaProps) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={Product_List}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => {
          navigation.navigate("Details",{
            product : item
          })
        }}
        >
          <ProductItems product={item} />
        </Pressable>
      )}
      />
    </View>
  )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
})