import { View, Text } from 'react-native'
import React from 'react'

const SaleFilter = ({label}) => {
  return (
    <View style={{
    alignSelf:'flex-start',
    margin:10,
    paddingHorizontal:10,
    borderRadius:20,
    backgroundColor:'#e33d2e',height:30,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white'}}>{label}</Text>
    </View>
  )
}

export default SaleFilter