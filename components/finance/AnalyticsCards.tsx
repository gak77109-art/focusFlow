type Props = {
  income: number;
  expense: number;
  remaining: number;
};

export default function AnalyticsCards({
  income,
  expense,
  remaining,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          background:
  "rgba(255,255,255,0.05)",

backdropFilter: "blur(12px)",

border:
  "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          borderRadius: "20px",
        }}
      >
        <h3>Total Income</h3>

        <p
          style={{
            color: "#22c55e",
            fontSize: "32px",
          }}
        >
          ₹{income}
        </p>
      </div>

      <div
        style={{
          background:
  "rgba(255,255,255,0.05)",

backdropFilter: "blur(12px)",

border:
  "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          borderRadius: "20px",
        }}
      >
        <h3>Total Expense</h3>

        <p
          style={{
            color: "#ef4444",
            fontSize: "32px",
          }}
        >
          ₹{expense}
        </p>
      </div>

      <div
        style={{
          background:
  "rgba(255,255,255,0.05)",

backdropFilter: "blur(12px)",

border:
  "1px solid rgba(255,255,255,0.08)",
          padding: "24px",
          borderRadius: "20px",
        }}
      >
        <h3>Remaining</h3>

        <p
          style={{
            color: "#3b82f6",
            fontSize: "32px",
          }}
        >
          ₹{remaining}
        </p>
      </div>
    </div>
  );
}