import { View, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Header = () => {

  return (
    <>
    <StatusBar style={"light"} />
 
    <View style={{
        flex:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:"100%",
        justifyContent:'space-between'
    }}>
        <Ionicons name="menu" size={30} color="white" />
        <Image 
        source={{uri:"https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"}}  
        style={{width:30,height:30,resizeMode:'contain',borderRadius:100}}
        />
    </View>

    </>
  )
}

export default Header