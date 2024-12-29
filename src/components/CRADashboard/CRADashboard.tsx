import React, { useState, useEffect } from 'react';
import { Player } from '../../types/cra';
import { getCRAData } from '../../services/craService';
import PlayerList from '../PlayerList/PlayerList';
import PlayerRiskScore from '../PlayerRiskScore/PlayerRiskScore';

const CRADashboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCRAData();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CRA Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PlayerList 
          players={players}
          onSelectPlayer={(player) => setSelectedPlayer(player)}
        />
        {selectedPlayer && (
          <PlayerRiskScore player={selectedPlayer} />
        )}
      </div>
    </div>
  );
};

export default CRADashboard; 