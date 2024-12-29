import React from 'react';
import { Player } from '../../types/cra';
import { updatePlayerRiskScore } from '../../services/craService';

interface PlayerRiskScoreProps {
  player: Player;
}

const PlayerRiskScore: React.FC<PlayerRiskScoreProps> = ({ player }) => {
  const handleScoreAdjustment = async (adjustment: number) => {
    await updatePlayerRiskScore(player.id, adjustment);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Player Risk Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Basic Information</h3>
            <div className="mt-2 space-y-2">
              <p>Name: {player.name}</p>
              <p>Account Age: {player.accountAgeDays} days</p>
              <p>Customer Age: {player.customerAgeYears} years</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Risk Score</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">{player.riskScore}</span>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleScoreAdjustment(-5)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  -5
                </button>
                <button
                  onClick={() => handleScoreAdjustment(5)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  +5
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Risk Factors</h3>
          <div className="space-y-2">
            <RiskFactor 
              label="Lifetime Deposit"
              value={`€${player.lifetimeDepositAmount.toLocaleString()}`}
            />
            <RiskFactor 
              label="Deposit Account Count"
              value={player.depositAccountCount}
            />
            <RiskFactor 
              label="PEP Status"
              value={player.pepStatus ? "Yes" : "No"}
              warning={player.pepStatus}
            />
            <RiskFactor 
              label="KYC Status"
              value={player.kycVerified ? "Verified" : "Pending"}
              warning={!player.kycVerified}
            />
            <RiskFactor 
              label="EDD Status"
              value={player.eddStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface RiskFactorProps {
  label: string;
  value: string | number | boolean;
  warning?: boolean;
}

const RiskFactor: React.FC<RiskFactorProps> = ({ label, value, warning }) => (
  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
    <span className="font-medium">{label}</span>
    <span className={warning ? 'text-red-600 font-medium' : ''}>{value}</span>
  </div>
);

export default PlayerRiskScore; 