import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Search,Sale,Cart} from './screens'
import Ionicons from '@expo/vector-icons/Ionicons'
import Header from './components/Header';
import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();

export default function App() {

  const theme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:"transparent"
    }
  }

  return (
    <NativeBaseProvider>
  <NavigationContainer theme={theme}>
    <Tab.Navigator initialRouteName='Home'
     screenOptions={({route})=>({
     tabBarStyle:{
      backgroundColor:'#00000f',
      borderColor:'#00000f',
      elevation:0
     },

      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if (route.name==="Home"){
          iconName='home-sharp'
        }
        else if (route.name==="Sale"){
          iconName='heart'
        }
        else if (route.name==="Cart"){
          iconName='cart'
        }
        else if (route.name==="Search"){
          iconName='search'
        }


        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e63946',
      tabBarInactiveTintColor: '#e5e5e5',
      tabBarShowLabel:false
    })}

    >
      <Tab.Screen name='Home' component={Home} 
      options={{
        headerTitle:(props)=><Header {...props} />,
        headerStyle:{
          backgroundColor:'#0c0b0c'
        }
      }}
      />
      <Tab.Screen name='Sale' component={Sale} 
         options={{
          title:"Top Sale",
          headerTintColor: '#fff',
          headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#0c0b0c'
        }
        }}
      />
      <Tab.Screen name='Cart' component={Cart }
      
      options={{
     headerTitle:(props)=><Header {...props} />,
        headerStyle:{
          backgroundColor:'#0c0b0c'
        }
      }}
      />
      <Tab.Screen name='Search' component={Search}
         options={{
       headerTitle:(props)=><Header {...props} />,
        headerStyle:{
          backgroundColor:'#0c0b0c'
        }
        }}
      />
     </Tab.Navigator>
    </NavigationContainer>
</NativeBaseProvider>

  );
}


