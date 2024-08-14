import React, {Component} from 'react';
import RNBootSplash from 'react-native-bootsplash';

/* navigation */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* screens */
import Home from './screens/Home';
import PIPExample from './screens/PIPExample';
import Dynamic from './screens/DynamicExample';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PIP" component={PIPExample} />
          <Stack.Screen name="Dynamic" component={Dynamic} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
