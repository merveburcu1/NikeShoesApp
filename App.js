import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, View,  Image, TouchableOpacity } from 'react-native'
import Home from './screens/Home'
import { images, icons, COLORS, FONTS, SIZES } from './constants';

const theme  ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent",
  }
}

const Stack = createStackNavigator();
const App = () =>{
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitleAlign:'center',
            headerTintColor:COLORS.lightGray,
            title:'SHOE SELECTOR',
            headerTitleStyle:{
              ...FONTS.navTitle
            },
            headerLeft:({onPress}) =>(
              <TouchableOpacity
                style={{marginLeft:SIZES.padding}}
                onPress={onPress}
                >
                  <Image source={icons.menu}
                         resizeMode='contain'
                         style={{
                              width:40,
                              height:40
                         }}
                  />
                
              </TouchableOpacity>
            ),
            headerRight:()=>(
              <TouchableOpacity
                  style={{marginRight:SIZES.padding}}
                  onPress={()=>console.log("header right on pressed")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                        width: 30,
                        height: 30,
                  }}
                />

              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default () => {
  return <App/>;
}