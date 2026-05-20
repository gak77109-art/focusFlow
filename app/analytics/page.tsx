"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// =========================
// DATA
// =========================

const weeklyData = [
  {
    day: "Mon",
    habits: 4,
  },
  {
    day: "Tue",
    habits: 6,
  },
  {
    day: "Wed",
    habits: 3,
  },
  {
    day: "Thu",
    habits: 7,
  },
  {
    day: "Fri",
    habits: 5,
  },
  {
    day: "Sat",
    habits: 8,
  },
  {
    day: "Sun",
    habits: 6,
  },
];

const financeData = [
  {
    name: "Income",
    value: 7000,
  },
  {
    name: "Expense",
    value: 3000,
  },
];

const COLORS = [
  "#22c55e",
  "#ef4444",
];

// =========================
// PAGE
// =========================

export default function AnalyticsPage() {
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
            fontSize: "38px",

            fontWeight: "bold",

            marginBottom: "10px",
          }}
        >
          Analytics
        </h1>

        <p
          style={{
            color: "#94a3b8",

            fontSize: "18px",
          }}
        >
          Visualize your growth and
          productivity.
        </p>
      </div>

      {/* STATS */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "20px",

          marginBottom: "35px",
        }}
      >
        <div style={cardStyle}>
          <p style={labelStyle}>
            Total Habits
          </p>

          <h1 style={numberStyle}>
            12
          </h1>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>
            Completed Today
          </p>

          <h1 style={numberStyle}>
            8
          </h1>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>
            Productivity Score
          </p>

          <h1 style={numberStyle}>
            87%
          </h1>
        </div>
      </div>

      {/* CHARTS */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(350px, 1fr))",

          gap: "25px",
        }}
      >
        {/* HABIT CHART */}

        <div style={chartCardStyle}>
          <h2
            style={{
              marginBottom: "20px",

              fontSize: "24px",
            }}
          >
            Weekly Habit Progress
          </h2>

          <div
            style={{
              width: "100%",

              height: "320px",
            }}
          >
            <ResponsiveContainer>
              <BarChart
                data={weeklyData}
              >
                <XAxis
                  dataKey="day"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="habits"
                  fill="#2563eb"
                  radius={[
                    10,
                    10,
                    0,
                    0,
                  ]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* FINANCE CHART */}

        <div style={chartCardStyle}>
          <h2
            style={{
              marginBottom: "20px",

              fontSize: "24px",
            }}
          >
            Income vs Expense
          </h2>

          <div
            style={{
              width: "100%",

              height: "320px",
            }}
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={
                    financeData
                  }
                  dataKey="value"
                  outerRadius={
                    100
                  }
                  label
                >
                  {financeData.map(
                    (
                      entry,
                      index
                    ) => (
                      <Cell
                        key={
                          index
                        }
                        fill={
                          COLORS[
                            index
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================
// STYLES
// =========================

const cardStyle = {
  backgroundColor: "#0f172a",

  border: "1px solid #1e293b",

  borderRadius: "20px",

  padding: "24px",
};

const chartCardStyle = {
  backgroundColor: "#0f172a",

  border: "1px solid #1e293b",

  borderRadius: "24px",

  padding: "25px",
};

const labelStyle = {
  color: "#94a3b8",

  marginBottom: "12px",

  fontSize: "16px",
};

const numberStyle = {
  fontSize: "38px",

  fontWeight: "bold",
};