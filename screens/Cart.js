import { View, Text,ScrollView,Image } from 'react-native'
import React,{useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Checkbox } from 'native-base'
import { TouchableOpacity } from 'react-native'


const Cart = ({navigation}) => {

    const [check,setCheck]=useState(false)
  return (
    <View style={{flex:1}}>
        <View style={{padding:12,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />
        <Text style={{position:'absolute',left:'50%',fontSize:20}}>Cart</Text>
        </View>
        <ScrollView>
               <View style={{display:'flex',flexDirection:'row',padding:12,alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>setCheck(!check)} >
                <Checkbox  colorScheme="red"  />
                </TouchableOpacity>
                <View style={{height:100,flex:1,display:'flex',flexDirection:'row',alignItems:'center',marginHorizontal:12}}>
                  <Image 
                  style={{height:'100%',borderRadius:12,width:100}}
                  source={{uri:"https://images.unsplash.com/photo-1658967136188-415466c22b9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"}}
                  />
                  <View style={{paddingLeft:12}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>AAA</Text>
                    <Text style={{fontSize:10,marginVertical:12}}>Hat fdas</Text>
                    <Text style={{fontSize:25,color:'#e63946'}}>200</Text>
                  </View>
                  
                </View>
                <View style={{display:'flex',width:75,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20,color:'gray'}}> - </Text>
                    <Text style={{fontSize:25,}}>1</Text>
                    <Text style={{fontSize:20,color:'#e63946'}}> + </Text>
                  </View>
                </View>     

                   <View style={{display:'flex',flexDirection:'row',padding:12,alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>setCheck(!check)} >
                <Checkbox  colorScheme="red"  />
                </TouchableOpacity>
                <View style={{height:100,flex:1,display:'flex',flexDirection:'row',alignItems:'center',marginHorizontal:12}}>
                  <Image 
                  style={{height:'100%',borderRadius:12,width:100}}
                  source={{uri:"https://images.unsplash.com/photo-1659098602926-969fc12ef61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
                  />
                  <View style={{paddingLeft:12}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>AAA</Text>
                    <Text style={{fontSize:10,marginVertical:12}}>Hat fdas</Text>
                    <Text style={{fontSize:25,color:'#e63946'}}>200</Text>
                  </View>
                  
                </View>
                <View style={{display:'flex',width:75,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20,color:'gray'}}> - </Text>
                    <Text style={{fontSize:25,}}>1</Text>
                    <Text style={{fontSize:20,color:'#e63946'}}> + </Text>
                  </View>
                </View> 

                   <View style={{display:'flex',flexDirection:'row',padding:12,alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>setCheck(!check)} >
                <Checkbox  colorScheme="red"  />
                </TouchableOpacity>
                <View style={{height:100,flex:1,display:'flex',flexDirection:'row',alignItems:'center',marginHorizontal:12}}>
                  <Image 
                  style={{height:'100%',borderRadius:12,width:100}}
                  source={{uri:"https://images.unsplash.com/photo-1658409313329-081973e2d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"}}
                  />
                  <View style={{paddingLeft:12}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>AAA</Text>
                    <Text style={{fontSize:10,marginVertical:12}}>Hat fdas</Text>
                    <Text style={{fontSize:25,color:'#e63946'}}>200</Text>
                  </View>
                  
                </View>
                <View style={{display:'flex',width:75,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:20,color:'gray'}}> - </Text>
                    <Text style={{fontSize:25,}}>1</Text>
                    <Text style={{fontSize:20,color:'#e63946'}}> + </Text>
                  </View>
                </View>         
        </ScrollView>
    </View>
  )
}

export default Cart