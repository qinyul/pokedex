import {PokeDetailProps} from '../../types/components/poke-detail-card';
import {Card, Tab} from '@rneui/themed';
import {POKEMON_BG_COLOURS} from '../../constants/styles';
import {useState} from 'react';
import {POKEMON_DETAIL_TAB_TITLE} from '../../constants/text-content';
import {PokemonInformationTab} from '../tab/pokemon-information-tab';
import {View} from 'react-native';
import {PokemonStatsTab} from '../tab/pokemon-stats-tab';
import {PokemonAbilitiesTab} from '../tab/pokemon-abilities-tab';

export const PokeDetailCard = ({pokemon}: PokeDetailProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const types = pokemon.types.map(type => type.type.name);
  const _stats = pokemon.stats;
  const mainType = types[0] as keyof typeof POKEMON_BG_COLOURS;
  const stats = {
    hp: _stats[0].base_stat,
    attack: _stats[1].base_stat,
    defense: _stats[2].base_stat,
    specialAttack: _stats[1].base_stat,
    specialDefense: _stats[1].base_stat,
    speed: _stats[1].base_stat,
  };
  const abilities = pokemon.abilities.map(({ability: {name, url}}) => ({
    name,
    url,
  }));

  return (
    <Card
      containerStyle={{
        backgroundColor: POKEMON_BG_COLOURS[mainType],
        borderRadius: 15,
      }}>
      <Tab value={tabIndex} onChange={setTabIndex} dense>
        <Tab.Item>{POKEMON_DETAIL_TAB_TITLE.about}</Tab.Item>
        <Tab.Item>{POKEMON_DETAIL_TAB_TITLE.stats}</Tab.Item>
        <Tab.Item>{POKEMON_DETAIL_TAB_TITLE.abilities}</Tab.Item>
      </Tab>
      <View>
        {tabIndex === 0 && (
          <PokemonInformationTab
            weight={pokemon.weight}
            height={pokemon.height}
            types={types}
          />
        )}
        {tabIndex === 1 && <PokemonStatsTab stats={stats} />}
        {tabIndex === 2 && <PokemonAbilitiesTab abilities={abilities} />}
      </View>
    </Card>
  );
};
