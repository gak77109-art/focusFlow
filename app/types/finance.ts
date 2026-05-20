export type DailyEntry = {
  id: number;

  date: string;

  income: number;

  foodExpense: number;

  otherExpense: number;

  scootyRent: number;

  remainingBalance: number;
};

export type SavingGoal = {
  id: number;

  name: string;

  percentage: number;

  savedAmount: number;
};