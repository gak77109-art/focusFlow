"use client";

import {
  useEffect,
  useState,
} from "react";

// =========================
// TYPES
// =========================

type Habit = {
  name: string;
  completed: boolean;
  streak: number;
};

// =========================
// PAGE
// =========================

export default function HabitsPage() {
  // =========================
  // STATES
  // =========================

  const [habits, setHabits] = useState<
    Habit[]
  >([
    {
      name: "Workout",
      completed: false,
      streak: 4,
    },
  ]);

  const [habitInput, setHabitInput] =
    useState("");

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    const savedHabits =
      localStorage.getItem(
        "focusflow-habits"
      );

    if (savedHabits) {
      setHabits(
        JSON.parse(savedHabits)
      );
    }
  }, []);

  // =========================
  // SAVE DATA
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "focusflow-habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  // =========================
  // ADD HABIT
  // =========================

  function addHabit() {
    if (
      habitInput.trim() === ""
    )
      return;

    const newHabit = {
      name: habitInput,
      completed: false,
      streak: 0,
    };

    setHabits([
      ...habits,
      newHabit,
    ]);

    setHabitInput("");
  }

  // =========================
  // TOGGLE HABIT
  // =========================

  function toggleHabit(
    index: number
  ) {
    const updatedHabits = [
      ...habits,
    ];

    updatedHabits[index].completed =
      !updatedHabits[index]
        .completed;

    if (
      updatedHabits[index]
        .completed
    ) {
      updatedHabits[index]
        .streak += 1;
    }

    setHabits(updatedHabits);
  }

  // =========================
  // DELETE HABIT
  // =========================

  function deleteHabit(
    index: number
  ) {
    const updatedHabits =
      habits.filter(
        (_, i) => i !== index
      );

    setHabits(updatedHabits);
  }

  // =========================
  // UI
  // =========================

  return (
    <div>
      {/* HEADER */}

      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Habits
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          Build discipline daily.
        </p>
      </div>

      {/* INPUT */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "35px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Enter new habit..."
          value={habitInput}
          onChange={(e) =>
            setHabitInput(
              e.target.value
            )
          }
          style={{
            flex: 1,
            minWidth: "250px",
            backgroundColor:
              "#0f172a",
            border:
              "1px solid #1e293b",
            borderRadius: "16px",
            padding: "16px",
            color: "white",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={addHabit}
          style={
            actionButtonStyle
          }
        >
          Add Habit
        </button>
      </div>

      {/* HABITS */}

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {habits.map(
          (
            habit,
            index
          ) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  "#0f172a",

                borderRadius:
                  "20px",

                padding: "20px",

                border:
                  "1px solid #1e293b",

                display: "flex",

                justifyContent:
                  "space-between",

                alignItems:
                  "center",
              }}
            >
              {/* LEFT */}

              <div>
                <h2
                  style={{
                    fontSize:
                      "24px",

                    marginBottom:
                      "10px",
                  }}
                >
                  {habit.name}
                </h2>

                <p
                  style={{
                    color:
                      "#94a3b8",
                  }}
                >
                  🔥{" "}
                  {
                    habit.streak
                  }{" "}
                  Day Streak
                </p>
              </div>

              {/* RIGHT */}

              <div
                style={{
                  display:
                    "flex",

                  gap: "12px",
                }}
              >
                {/* COMPLETE */}

                <button
                  onClick={() =>
                    toggleHabit(
                      index
                    )
                  }
                  style={{
                    backgroundColor:
                      habit.completed
                        ? "#22c55e"
                        : "#1e293b",

                    border:
                      "none",

                    color:
                      "white",

                    width:
                      "50px",

                    height:
                      "50px",

                    borderRadius:
                      "14px",

                    cursor:
                      "pointer",

                    fontSize:
                      "20px",
                  }}
                >
                  ✓
                </button>

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteHabit(
                      index
                    )
                  }
                  style={{
                    backgroundColor:
                      "#dc2626",

                    border:
                      "none",

                    color:
                      "white",

                    padding:
                      "12px 18px",

                    borderRadius:
                      "12px",

                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

// =========================
// BUTTON STYLE
// =========================

const actionButtonStyle = {
  backgroundColor: "#2563eb",

  color: "white",

  border: "none",

  padding: "16px 24px",

  borderRadius: "16px",

  fontSize: "16px",

  cursor: "pointer",
};