import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import AccountStack from '../navitagions/AccountStack';
import FavoriteStack from '../navitagions/FavoriteStack';
import SearchStack from '../navitagions/SearchStack';
import TopRestaurantsStack from '../navitagions/TopRestaurantsStack';
import RestaurantsStack from '../navitagions/RestaurantsStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="account"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#00a680',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="acount"
          component={AccountStack}
          options={{ title: 'Cuenta' }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoriteStack}
          options={{ title: 'Favoritos ' }}
        />
        <Tab.Screen
          name="restaurantes"
          component={RestaurantsStack}
          options={{ title: 'Restaurantes' }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen
          name="toprestaurants"
          component={TopRestaurantsStack}
          options={{ title: 'Top Restaurantes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case 'acount':
      iconName = 'account-outline';
      break;
    case 'favorites':
      iconName = 'heart-outline';
      break;
    case 'restaurantes':
      iconName = 'compass-outline';
      break;
    case 'search':
      iconName = 'magnify';
      break;
    case 'toprestaurants':
      iconName = 'star-outline';
      break;

    default:
      break;
  }

  return (
    <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}
    ></Icon>
  );
}
