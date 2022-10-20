import { createStackNavigator } from '@react-navigation/stack';

import { View , Image, Text, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen, RestaurantScreen,BasketScreen} from './src/screens'
import { Provider } from 'react-redux';
import { store } from './store';





const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Basket" 
      component={BasketScreen} 
      options={{
        presentation:'modal',
        headerShown:false,
      }}
      />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
<NavigationContainer>
  <Provider store={store}>

  <MyStack/>
  </Provider>
</NavigationContainer>
  );
}




