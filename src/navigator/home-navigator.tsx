import {createStackNavigator} from '@react-navigation/stack';
import {ROUTE} from '../constants/text-content';
import {DetailScreen} from '../screen/detail-screen';
import {HomeScreen} from '../screen/home-screen';

export const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE.stack.home} component={HomeScreen} />
      <Stack.Screen name={ROUTE.stack.detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};
