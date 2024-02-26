import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './src/navigator/home-navigator';
import {ROUTE} from './src/constants/text-content';
import {CompareNavigator} from './src/navigator/compare-navigator';
import {Image} from 'react-native';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              title: 'Pokedex',
              tabBarIcon: () => (
                <Image
                  source={require('./assets/pokemon/16.png')}
                  style={{width: 80, height: 80}}
                />
              ),
            }}
            name={ROUTE.tab.home}
            component={HomeNavigator}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={require('./assets/icon/vs.png')}
                  style={{width: 30, height: 30}}
                />
              ),
            }}
            name={ROUTE.tab.compare}
            component={CompareNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
