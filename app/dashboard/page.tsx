"use client";

import StatCard from "../../components/StatCard";

export default function DashboardPage() {
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
          Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          Welcome back, Aman.
        </p>
      </div>

      {/* STATS */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "25px",

          marginBottom: "35px",
        }}
      >
        <StatCard
          title="Total Habits"
          value="12"
        />

        <StatCard
          title="Completed Today"
          value="8"
        />

        <StatCard
          title="Best Streak"
          value="18🔥"
        />
      </div>

      {/* QUICK ACTIONS */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <button style={buttonStyle}>
          + Add Habit
        </button>

        <button style={buttonStyle}>
          + Add Income
        </button>

        <button style={buttonStyle}>
          Analytics
        </button>
      </div>

      {/* ANALYTICS */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",

          gap: "25px",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            backgroundColor: "#0f172a",

            borderRadius: "24px",

            padding: "30px",

            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Weekly Progress
          </h2>

          <div
            style={{
              height: "300px",

              backgroundColor: "#111827",

              borderRadius: "20px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              color: "#94a3b8",
            }}
          >
            Chart Coming Soon
          </div>
        </div>

        {/* RIGHT */}

        <div
          style={{
            backgroundColor: "#0f172a",

            borderRadius: "24px",

            padding: "30px",

            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Profile
          </h2>

          <div
            style={{
              width: "90px",

              height: "90px",

              borderRadius: "50%",

              backgroundColor: "#2563eb",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              fontSize: "36px",

              fontWeight: "bold",

              marginBottom: "20px",
            }}
          >
            A
          </div>

          <h3
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Aman
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "20px",
            }}
          >
            Level 4 Productivity Builder
          </p>

          {/* PROGRESS */}

          <div>
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              Today's Progress
            </p>

            <div
              style={{
                width: "100%",

                height: "14px",

                backgroundColor: "#1e293b",

                borderRadius: "20px",

                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "70%",

                  height: "100%",

                  backgroundColor: "#22c55e",
                }}
              />
            </div>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              70% Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#2563eb",

  color: "white",

  border: "none",

  padding: "16px 24px",

  borderRadius: "16px",

  fontSize: "16px",

  cursor: "pointer",
};