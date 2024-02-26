import {useEffect} from 'react';
import {client} from '../api-client/client';
import {useSetRecoilState} from 'recoil';
import {loadingState} from '../atoms/loading-state';

export const useFetch = (
  callback: (data: any) => void,
  deps = [] as any,
  overridePath?: string,
) => {
  const setIsLoading = useSetRecoilState(loadingState);
  const controller = new AbortController();
  const signal = controller.signal;

  const getData = async (
    signal: any,
    callback: (data: any) => void,
    overridePath?: string,
  ) => {
    setIsLoading(true);
    const res = await client(
      overridePath ?? process.env.POKEAPI_POKEMON_PATH,
      signal,
    );
    setIsLoading(false);
    callback(res);
  };

  useEffect(() => {
    const controller = new AbortController();
    getData(signal, callback, overridePath);
    return () => {
      controller.abort();
    };
  }, deps);
};
