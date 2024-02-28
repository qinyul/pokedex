import {createStackNavigator} from '@react-navigation/stack';
import {Button} from '@rneui/themed';
import {APP_TITLE, MAIN_STACK_NAVIGATOR_OPTIONS} from '../constants/common';
import {COLOUR} from '../constants/styles';
import {ROUTE} from '../constants/text-content';
import {DetailScreen} from '../screen/detail-screen';
import {HomeScreen} from '../screen/home-screen';

export const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={MAIN_STACK_NAVIGATOR_OPTIONS}
        name={ROUTE.stack.home}
        component={HomeScreen}
      />
      <Stack.Screen
        options={MAIN_STACK_NAVIGATOR_OPTIONS}
        name={ROUTE.stack.detail}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
