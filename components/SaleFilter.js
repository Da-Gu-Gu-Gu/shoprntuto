import { View, Text } from 'react-native'
import React from 'react'

const SaleFilter = ({label}) => {
  return (
    <View style={{
    alignSelf:'flex-start',
    margin:10,
    paddingHorizontal:10,
    borderRadius:20,
    backgroundColor:'#e2e2e2',height:30,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'black'}}>{label}</Text>
    </View>
  )
}

export default SaleFilter