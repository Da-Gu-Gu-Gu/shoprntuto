import { View, Image,TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Sale from './Sale'
import { ScrollView } from 'native-base'


const Home = () => {
  return (
    <View style={{flex:1,}}>
           <ScrollView>
        <View style={{
            
            padding:12,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
        <TextInput 
                placeholder='Search ...'
                style={{width:'80%',padding:10,borderRadius:12,backgroundColor:'#edede9'}}
                />
                <View style={{padding:10,backgroundColor:'#edede9',borderRadius:12}}>
                <Ionicons name="search" size={24} color="black" />
                </View>
        </View>
     
        <View style={{height:200,width:'100%'}}>
          <Image
          source={{uri:"https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}}
          style={{
            resizeMode:'cover',
            width:'100%',
            height:'100%'
          }}
          />
        </View>

        <Sale bg={"white"}/>
        </ScrollView>
    </View>
  )
}

export default Home