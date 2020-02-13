import {
  CHAMPION_KEYS, CHAMPION_NAMES, SUMMONER_SPELLS, MAPS,
} from './data';

export const getChampionName = (championId: number) => CHAMPION_NAMES.find((c) => c.id === championId)?.name || '';

export const getChampionKey = (championId: number) => CHAMPION_KEYS.find((c) => c.id === championId)?.key || '';

export const getSummonerSpellKey = (summonerSpellId: number) => SUMMONER_SPELLS[summonerSpellId];

export const getMapName = (mapId: number) => MAPS.find((c) => c.mapId === mapId)?.mapName || '';
