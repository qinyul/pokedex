import {View} from 'react-native';
import {Typography} from '../typography/typography';
import {Ability, PokemonAbilitiesTabProps} from '../../types/components/tab';
import styles from './styles';
import {useFetch} from '../../hooks/use-fetch';
import {useState} from 'react';
import {AbilityDescription} from '../../types/pokemon';
import {LANGUAGE_API_URI} from '../../constants/common';
import {ABILITY_DESCRIPTION_LOADING_TEXT} from '../../constants/text-content';

export const AbilityAttribute = ({ability}: {ability: Ability}) => {
  const [abilityEffect, setAbilityEffect] = useState(
    ABILITY_DESCRIPTION_LOADING_TEXT,
  );
  const abilityPath = ability.url.slice(25, -1);

  const getPokemons = (res: any) => {
    const descriptions = res.data.effect_entries as AbilityDescription[];
    const enDescription = descriptions.find(
      description => description.language.url === LANGUAGE_API_URI,
    );
    const effect = enDescription?.effect;
    if (effect) {
      setAbilityEffect(effect);
    }
  };

  useFetch(getPokemons, [], `${abilityPath}`);
  return (
    <View>
      <Typography
        text={ability.name}
        customStyle={{...styles.itemInformationColumn, fontWeight: 'bold'}}
      />
      <Typography
        text={abilityEffect}
        customStyle={styles.itemInformationColumn}
      />
    </View>
  );
};

export const PokemonAbilitiesTab = ({abilities}: PokemonAbilitiesTabProps) => {
  return (
    <View style={{marginTop: 10}}>
      {abilities.map((ability, i) => (
        <AbilityAttribute key={i} ability={ability} />
      ))}
    </View>
  );
};
