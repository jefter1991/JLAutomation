import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateParts from './pages/Parts/Create';
import ListParts from './pages/Parts/List';
import EditParts from './pages/Parts/Edit';
import CreateDevices from './pages/Devices/Create';
import EditDevices from './pages/Devices/Edit';
import ListDevices from './pages/Devices/List'
import Home from  './pages/Home';
import MyHouse from './pages/MyHouse';
import DevicesPart from './pages/DevicesParts';

const Stack = createStackNavigator();

export default function Routes( ) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateParts" component={CreateParts} />
          <Stack.Screen name="ListParts" component={ListParts} />
          <Stack.Screen name="EditParts" component={EditParts} />
          <Stack.Screen name="ListDevices" component={ListDevices} />
          <Stack.Screen name="CreateDevices" component={CreateDevices}/>
          <Stack.Screen name="EditDevices" component={EditDevices} />
          <Stack.Screen name="MyHouse" component={MyHouse} />
          <Stack.Screen name="DevicesParts" component={DevicesPart} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}