"use client";

import { useEffect, useState } from "react";

import BalanceCards from "../../components/finance/BalanceCards";
import DailyEntryForm from "../../components/finance/DailyEntryForm";
import SavingsGoals from "../../components/finance/SavingsGoals";
import TransactionHistory from "../../components/finance/TransactionHistory";
import AnalyticsCards from "../../components/finance/AnalyticsCards";

type Transaction = {
  id: number;
  type: "income" | "expense";
  amount: number;
  date: string;
};

type SavingGoal = {
  id: number;
  name: string;
  percentage: number;
  amount: number;
};

export default function FinancePage() {
  // =========================
  // STATES
  // =========================

  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);

  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  const [goals, setGoals] = useState<SavingGoal[]>([
    {
      id: 1,
      name: "Emergency Fund",
      percentage: 50,
      amount: 0,
    },
    {
      id: 2,
      name: "Laptop",
      percentage: 30,
      amount: 0,
    },
    {
      id: 3,
      name: "Travel",
      percentage: 20,
      amount: 0,
    },
  ]);

  // =========================
  // LOAD LOCAL STORAGE
  // =========================

  useEffect(() => {
    const savedIncome =
      localStorage.getItem("income");

    const savedExpense =
      localStorage.getItem("expense");

    const savedTransactions =
      localStorage.getItem("transactions");

    const savedGoals =
      localStorage.getItem("goals");

    if (savedIncome) {
      setIncome(JSON.parse(savedIncome));
    }

    if (savedExpense) {
      setExpense(JSON.parse(savedExpense));
    }

    if (savedTransactions) {
      setTransactions(
        JSON.parse(savedTransactions)
      );
    }

    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);

  // =========================
  // SAVE LOCAL STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "income",
      JSON.stringify(income)
    );

    localStorage.setItem(
      "expense",
      JSON.stringify(expense)
    );

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

    localStorage.setItem(
      "goals",
      JSON.stringify(goals)
    );
  }, [
    income,
    expense,
    transactions,
    goals,
  ]);

  // =========================
  // REMAINING BALANCE
  // =========================

  const remaining = income - expense;

  // =========================
  // ADD TRANSACTION
  // =========================

  const addTransaction = (
    type: "income" | "expense",
    amount: number,
    date: string
  ) => {
    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      date,
    };

    setTransactions((prev) => [
      newTransaction,
      ...prev,
    ]);

    if (type === "income") {
      setIncome((prev) => prev + amount);

      distributeSavings(amount);
    }

    if (type === "expense") {
      setExpense((prev) => prev + amount);
    }
  };

  // =========================
  // DISTRIBUTE SAVINGS
  // =========================

  const distributeSavings = (
    incomeAmount: number
  ) => {
    const updatedGoals = goals.map((goal) => {
      const addedAmount =
        (incomeAmount * goal.percentage) /
        100;

      return {
        ...goal,
        amount:
          goal.amount + addedAmount,
      };
    });

    setGoals(updatedGoals);
  };

  // =========================
  // ADD SAVINGS GOAL
  // =========================

  const addGoal = (
    name: string,
    percentage: number
  ) => {
    const totalPercentage =
      goals.reduce(
        (acc, goal) =>
          acc + goal.percentage,
        0
      ) + percentage;

    if (totalPercentage > 100) {
      alert(
        "Total allocation must equal 100%"
      );
      return;
    }

    const newGoal = {
      id: Date.now(),
      name,
      percentage,
      amount: 0,
    };

    setGoals((prev) => [
      ...prev,
      newGoal,
    ]);
  };

  // =========================
  // DELETE GOAL
  // =========================

  const deleteGoal = (id: number) => {
    const filteredGoals =
      goals.filter(
        (goal) => goal.id !== id
      );

    setGoals(filteredGoals);
  };

  // =========================
  // DELETE TRANSACTION
  // =========================

  const deleteTransaction = (
    id: number
  ) => {
    const transaction =
      transactions.find(
        (item) => item.id === id
      );

    if (!transaction) return;

    if (transaction.type === "income") {
      setIncome(
        (prev) =>
          prev - transaction.amount
      );
    }

    if (
      transaction.type === "expense"
    ) {
      setExpense(
        (prev) =>
          prev - transaction.amount
      );
    }

    const updatedTransactions =
      transactions.filter(
        (item) => item.id !== id
      );

    setTransactions(
      updatedTransactions
    );
  };

  // =========================
  // VALIDATION
  // =========================

  const totalPercentage =
    goals.reduce(
      (acc, goal) =>
        acc + goal.percentage,
      0
    );

  // =========================
  // UI
  // =========================

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #050816, #0f172a)",
        padding: "30px",
        color: "white",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Finance Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          Manage income, expenses
          and savings goals.
        </p>
      </div>

      {/* VALIDATION */}

      {totalPercentage !== 100 && (
        <div
          style={{
            background: "#7f1d1d",
            color: "#fecaca",
            padding: "14px",
            borderRadius: "14px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Total allocation must equal
          100%
        </div>
      )}

      {/* DAILY ENTRY FORM */}

      <DailyEntryForm
        onAddTransaction={
          addTransaction
        }
      />

      {/* BALANCE CARDS */}

      <BalanceCards
        income={income}
        expense={expense}
        remaining={remaining}
      />

      {/* ANALYTICS */}

      <AnalyticsCards
        income={income}
        expense={expense}
        remaining={remaining}
      />

      {/* SAVINGS GOALS */}

      <SavingsGoals
        goals={goals}
        addGoal={addGoal}
        deleteGoal={deleteGoal}
      />

      {/* TRANSACTION HISTORY */}

      <TransactionHistory
        transactions={transactions}
        onDelete={
          deleteTransaction
        }
      />
    </div>
  );
}