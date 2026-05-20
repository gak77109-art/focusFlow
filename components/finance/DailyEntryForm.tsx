import { useState } from "react";

type Props = {
  onAddTransaction: (
    type: "income" | "expense",
    amount: number,
    date: string
  ) => void;
};

export default function DailyEntryForm({
  onAddTransaction,
}: Props) {
  const [amount, setAmount] =
    useState("");

  const [type, setType] =
    useState<"income" | "expense">(
      "income"
    );

  const [date, setDate] =
    useState("");

  function handleSubmit() {
    if (!amount || !date) return;

    onAddTransaction(
      type,
      Number(amount),
      date
    );

    setAmount("");
    setDate("");
  }

  return (
    <div
      style={{
        background: "#111827",
        padding: "24px",
        borderRadius: "20px",
        marginTop: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Add Transaction
      </h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "16px",
          borderRadius: "12px",
          border: "none",
        }}
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "16px",
          borderRadius: "12px",
          border: "none",
        }}
      />

      <select
        value={type}
        onChange={(e) =>
          setType(
            e.target
              .value as "income" | "expense"
          )
        }
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "16px",
          borderRadius: "12px",
        }}
      >
        <option value="income">
          Income
        </option>

        <option value="expense">
          Expense
        </option>
      </select>

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          
          color: "white",
          cursor: "pointer",
        }}
      >
        Add Transaction
      </button>
    </div>
  );
}