import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import OrderCards from '@/components/cards/orderCards';


const HomeScreen = () => {
  return (
   <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen! 🚀</Text>
      <OrderCards/>
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 18, fontWeight: 'bold' }
});
