import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TopRestarants } from '../screens/TopRestarants';

const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="toprestaurants"
        component={TopRestarants}
        options={{
          title: 'Top Restaurants',
        }}
      />
    </Stack.Navigator>
  );
}
