import {ROUTE} from '../../constants/text-content';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen as PokemonList} from '../../screen/home-screen';
import {PokeDiff} from '../poke-diff';

export const PokemonCompare = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTE.stack.pokemonCompare}
        component={PokeDiff}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE.stack.pokemonList}
        component={PokemonList}
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};
