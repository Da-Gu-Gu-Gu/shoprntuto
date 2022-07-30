import { View, Image,Text } from 'react-native'
import { Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'

const SaleImage = ({imgUrl,title,price}) => {
  return (
    <View>
    <View style={{
        marginVertical:10,
        width:Dimensions.get('window').width/2 - 30,height:180,overflow:'hidden',borderRadius:20}}>
      <Image source={{uri:imgUrl}}
      style={{
        resizeMode:'cover',
        width:'100%',
        height:'100%'
      }}
      />

      <Ionicons name="heart-circle-outline" style={{position:'absolute',
        top:12,
        right:10,
    }} size={30} color="white" />
    </View>
          <Text style={{color:'#B2EE32',fontFamily:'bold',fontSize:18}}>{title}</Text>
          <Text style={{color:'white'}}>$ {price}</Text>
          </View>
  )
}

export default SaleImage