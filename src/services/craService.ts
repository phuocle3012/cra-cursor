import exampleData from '../example_data.json';
import { Player } from '../types/cra';

export const getCRAData = async (): Promise<Player[]> => {
  // In real implementation, this would be an API call
  return exampleData.players;
};

export const getPlayerRiskScore = async (playerId: string): Promise<Player | undefined> => {
  const players = await getCRAData();
  return players.find(player => player.id === playerId);
};

export const updatePlayerRiskScore = async (playerId: string, adjustment: number): Promise<void> => {
  // In real implementation, this would be an API call
  console.log(`Updating player ${playerId} risk score by ${adjustment}`);
}; 