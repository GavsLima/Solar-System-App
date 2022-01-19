import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import PlanetDetails from './screens/Details';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    card: 'rgba(35, 11, 87, 0.8)',
    background: 'rgba(35, 11, 87, 0.8)',
    text: '#FFF',
  },
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
      
        />
        <Stack.Screen
          name="Details"
          component={PlanetDetails}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
