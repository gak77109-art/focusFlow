"use client";

import { useState } from "react";

type Props = {
  onAddGoal: (
    name: string,

    percentage: number
  ) => void;
};

export default function AddGoalForm({
  onAddGoal,
}: Props) {
  // =====================
  // STATES
  // =====================

  const [name, setName] =
    useState("");

  const [
    percentage,
    setPercentage,
  ] = useState("");

  // =====================
  // SUBMIT
  // =====================

  function handleSubmit() {
    if (
      name.trim() === "" ||
      percentage === ""
    ) {
      return;
    }

    onAddGoal(
      name,

      Number(percentage)
    );

    // RESET INPUTS

    setName("");

    setPercentage("");
  }

  // =====================
  // UI
  // =====================

  return (
    <div
      style={{
        backgroundColor: "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius: "20px",

        padding: "24px",

        marginBottom: "30px",
      }}
    >
      {/* TITLE */}

      <h2
        style={{
          fontSize: "24px",

          marginBottom: "20px",
        }}
      >
        Add Savings Goal
      </h2>

      {/* INPUTS */}

      <div
        style={{
          display: "grid",

          gap: "16px",
        }}
      >
        {/* GOAL NAME */}

        <input
          type="text"
          placeholder="Goal Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          style={inputStyle}
        />

        {/* PERCENTAGE */}

        <input
          type="number"
          placeholder="Percentage Allocation"
          value={percentage}
          onChange={(e) =>
            setPercentage(
              e.target.value
            )
          }
          style={inputStyle}
        />

        {/* BUTTON */}

        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Add Goal
        </button>
      </div>
    </div>
  );
}

// =====================
// STYLES
// =====================

const inputStyle = {
  backgroundColor: "#020617",

  border: "1px solid #1e293b",

  borderRadius: "14px",

  padding: "16px",

  color: "white",

  fontSize: "16px",

  outline: "none",
};

const buttonStyle = {
  background:
  "linear-gradient(to right, #2563eb, #7c3aed)",

  color: "white",

  border: "none",

  borderRadius: "14px",

  padding: "16px",

  fontWeight: "bold",

  cursor: "pointer",

  fontSize: "16px",
};