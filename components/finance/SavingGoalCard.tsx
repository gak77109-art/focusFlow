type Props = {
  name: string;

  percentage: number;

  amount: number;

  onDelete: () => void;

  onEdit: () => void;
};

export default function SavingGoalCard({
  name,

  percentage,

  amount,

  onDelete,

  onEdit,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius: "24px",

        padding: "24px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        flexWrap: "wrap",

        gap: "20px",
      }}
    >
      {/* LEFT */}

      <div>
        <h2
          style={{
            fontSize: "24px",
          }}
        >
          {name}
        </h2>

        <p
          style={{
            color: "#94a3b8",

            marginTop: "8px",
          }}
        >
          {percentage}%
          Allocation
        </p>

        <h1
          style={{
            color: "#22c55e",

            marginTop: "14px",

            fontSize: "32px",
          }}
        >
          ₹{amount}
        </h1>
      </div>

      {/* BUTTONS */}

      <div
        style={{
          display: "flex",

          gap: "12px",
        }}
      >
        <button
          onClick={onEdit}
          style={{
            background:
  "linear-gradient(to right, #2563eb, #7c3aed)",

            color: "white",

            border: "none",

            padding:
              "12px 18px",

            borderRadius:
              "12px",

            cursor: "pointer",

            fontWeight:
              "bold",
          }}
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          style={{
            background:
  "linear-gradient(to right, #2563eb, #7c3aed)",

backdropFilter: "blur(12px)",

border:
  "1px solid rgba(255,255,255,0.08)",

            color: "white",

            

            padding:
              "12px 18px",

            borderRadius:
              "12px",

            cursor: "pointer",

            fontWeight:
              "bold",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}