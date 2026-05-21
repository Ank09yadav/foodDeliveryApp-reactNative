import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderCards = () => {
  return (
    <View>
      <Image source={ require('../../../assets/images/onboarding1.jpg')} style={{width:100, height:100 }}/>
      <Text>orderCards</Text>
    </View>
  )
}

export default OrderCards

const styles = StyleSheet.create({

})