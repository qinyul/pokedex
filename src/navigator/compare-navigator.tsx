import {createStackNavigator} from '@react-navigation/stack';
import {MAIN_STACK_NAVIGATOR_OPTIONS} from '../constants/common';
import {ROUTE} from '../constants/text-content';
import {CompareScreen} from '../screen/compare-screen';

export const CompareNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE.stack.compare}
        options={MAIN_STACK_NAVIGATOR_OPTIONS}
        component={CompareScreen}
      />
    </Stack.Navigator>
  );
};
