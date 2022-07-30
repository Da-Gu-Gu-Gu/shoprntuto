import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SaleImage from '../components/SaleImage'
import SaleFilter from '../components/SaleFilter'

const data=[
    {
    id:1,
    imgUrl:"https://images.unsplash.com/photo-1658967136188-415466c22b9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    title:"P-01",
    price:"20"
},

{
    id:2,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1658409009905-00a0f737bdf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
},

{
    id:3,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1634621388807-a315c4c47c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
},

{
    id:4,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
},

{
    id:5,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
},
{
    id:6,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1658967136188-415466c22b9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
},

{
    id:7,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1658409009905-00a0f737bdf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
},

{
    id:8,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1634621388807-a315c4c47c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
},

{
    id:9,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
},

{
    id:10,
    title:"P-01",
    price:"20",
    imgUrl:"https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
},

]

const filter=[
    {label:'Shoes'},
    {label:'FW 2021'},
    {label:'Men'},
    {label:'Kid'},
    {label:'Girl'},
    {label:'New'},

]

const Sale = ({bg}) => {
  return (
    <View style={{flex:1,paddingHorizontal:12,backgroundColor:bg?bg:'#0c0b0c',paddingBottom:20}}>
        <FlatList data={filter}
        renderItem={({item})=><SaleFilter label={item.label} />}
        keyExtractor={(item)=>item.label}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
        
        <FlatList 
        data={data}
        columnWrapperStyle={{justifyContent: 'space-between'}}

        renderItem={({item})=><SaleImage imgUrl={item.imgUrl} price={item.price} title={item.title} />}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        />
      
    </View>
  )
}

export default Sale