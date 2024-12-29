import React from 'react';
import { Player } from '../../types/cra';

interface PlayerListProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onSelectPlayer }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Players</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Risk Score</th>
              <th className="px-4 py-2">KYC Status</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr 
                key={player.id}
                onClick={() => onSelectPlayer(player)}
                className="hover:bg-gray-100 cursor-pointer"
              >
                <td className="px-4 py-2">{player.name}</td>
                <td className="px-4 py-2">
                  <RiskScoreBadge score={player.riskScore} />
                </td>
                <td className="px-4 py-2">
                  {player.kycVerified ? 'Verified' : 'Pending'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RiskScoreBadge: React.FC<{ score: number }> = ({ score }) => {
  const getColor = () => {
    if (score < 30) return 'bg-green-100 text-green-800';
    if (score < 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${getColor()}`}>
      {score}
    </span>
  );
};

export default PlayerList; 