import { env } from '@/config/env';
import { Floor } from '@/types/api';

export const getFloor = async (gameId: string) => {
  const response = await fetch(`${env.API_URL}/game/floor`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      GameID: gameId,
    },
  });
  const data = await response.json();
  return data;
};

export const postFloor = async (gameId: string) => {
  console.log('postFloor');
  const response = await fetch(`${env.API_URL}/game/floor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      GameID: gameId,
    },
  });
  const data: Floor[] = await response.json();
  return data;
};