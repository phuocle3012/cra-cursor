export interface Player {
  id: string;
  name: string;
  riskScore: number;
  accountAgeDays: number;
  customerAgeYears: number;
  lifetimeDepositAmount: number;
  depositAccountCount: number;
  duplicateAccountCount: number;
  slotsAverageBet: number;
  tableGamesAverageBet: number;
  pepStatus: boolean;
  kycVerified: boolean;
  tamperedDocuments: boolean;
  eddStatus: string;
  withdrawalToDepositAmountRatio: number;
  withdrawalToDepositCountRatio: number;
  scoreAdjustment: number;
}

export interface RiskScoreBreakdown {
  attribute: string;
  score: number;
  description: string;
} 