import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import Home from './screens/home';

import Temporada from './screens/temporada';

//import Corridas from './screens/corridas/index'


const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
  },
  Temporada: {
    screen: Temporada,
  }
},
  {

    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#B22222',
      },
      headerTintColor: '#FFF',
      headerBackTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },

  
  
  
  
  
  
  
  )
  
  ;

export default createAppContainer(AppNavigator)


