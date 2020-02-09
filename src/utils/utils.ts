import { CHAMPION_KEYS, CHAMPION_NAMES } from './data';

export const getChampionName = (championId: number) => CHAMPION_NAMES.find((c) => c.id === championId)?.name || '';

export const getChampionKey = (championId: number) => CHAMPION_KEYS.find((c) => c.id === championId)?.key || '';
