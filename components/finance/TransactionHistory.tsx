type Transaction = {
  id: number;
  type: "income" | "expense";
  amount: number;
  date: string;
};

type Props = {
  transactions: Transaction[];

  onDelete: (id: number) => void;
};

export default function TransactionHistory({
  transactions,
  onDelete,
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
        Transaction History
      </h2>

      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          style={{
            background: "#1f2937",
            padding: "14px",
            borderRadius: "12px",
            marginBottom: "12px",
            color: "white",
          }}
        >
          <p>{transaction.type}</p>

          <p>₹{transaction.amount}</p>

          <p>{transaction.date}</p>

          <button
            onClick={() =>
              onDelete(transaction.id)
            }
            style={{
              marginTop: "10px",
              background: "red",
              border: "none",
              padding: "8px 14px",
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