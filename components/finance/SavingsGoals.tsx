type SavingGoal = {
  id: number;
  name: string;
  percentage: number;
  amount: number;
};

type Props = {
  goals: SavingGoal[];

  addGoal: (
    name: string,
    percentage: number
  ) => void;

  deleteGoal: (id: number) => void;
};

export default function SavingsGoals({
  goals,
  addGoal,
  deleteGoal,
}: Props) {
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
          color: "white",
          marginBottom: "20px",
        }}
      >
        Savings Goals
      </h2>

      {goals.map((goal) => (
        <div
          key={goal.id}
          style={{
            background: "#1f2937",
            padding: "16px",
            borderRadius: "14px",
            marginBottom: "14px",
            color: "white",
          }}
        >
          <h3>{goal.name}</h3>

          <p>{goal.percentage}% Allocation</p>

          <p>₹{goal.amount}</p>

          <button
            onClick={() => deleteGoal(goal.id)}
            style={{
              marginTop: "10px",
              background: "red",
              border: "none",
              padding: "10px 14px",
              borderRadius: "10px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}