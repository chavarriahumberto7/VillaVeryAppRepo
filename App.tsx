import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
  );
}




