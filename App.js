import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreenOne from './Screens/TabScreens/TabScreenOne';
import TabScreenTwo from './Screens/TabScreens/TabScreenTwo';
import StackScreen from './Screens/StackScreen';

const Tab = createBottomTabNavigator();



const App = () => {


  return (
    <NavigationContainer>
        <Tab.Navigator
  
            initialRouteName='MainHome'
            screenOptions={({route}) => ({
              tabBarStyle: { borderTopColor: '#5CBB5E', borderTopWidth: 1, paddingVertical: 10 , height: 70},
              tabBarIcon: ({focused, size, color}) => {

              if(route.name === 'MainHome')
              {  
                if(focused)
                  return(
                      <Image source={require('./assets/homeFill.png')}/>
                  )
                  else{
                    return (
                      <Image source={require('./assets/home.png')}/>
                    )
                  }
              }
              else if(route.name === 'TabScreenOne')
              {
                if(focused)
                return(
                    <Image source={require('./assets/rupiFill.png')}/>
                )
                else{
                  return (
                    <Image source={require('./assets/rupi.png')}/>
                  )
                }
              }

              else if(route.name === 'TabScreenTwo')
              {
                if(focused)
                return(
                      <Image  source={require('./assets/bag.png')}/>
                )
                else{
                  return (
  
                      <Image  source={require('./assets/bag.png')}/>
                  )
                }
              }
                }
              })}
              >
              <Tab.Screen  options={{
                tabBarLabelStyle: {color: '#ffff'},
                header: () => null
              }} name="MainHome" component={StackScreen}/>
              <Tab.Screen  options={{
                tabBarLabelStyle: {color: '#ffff'},
                header: () => null
              }} name="TabScreenOne" component={TabScreenOne}/>
              <Tab.Screen  options={{
                tabBarBadge: `${'2'}`,
                tabBarLabelStyle: {color: '#ffff'},
                tabBarBadgeStyle: {backgroundColor: 'white', borderRadius: 50, borderWidth: 1, borderColor: '#5CBB5E', marginBottom: 10, color: '#5CBB5E', fontSize: 12},
                header: () => null
              }} name="TabScreenTwo" component={TabScreenTwo}/>
    
        </Tab.Navigator> 
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
//done