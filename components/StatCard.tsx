type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        padding: "30px",
        borderRadius: "24px",
        border: "1px solid #1e293b",
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "42px",
          marginTop: "20px",
          color: "white",
        }}
      >
        {value}
      </h1>
    </div>
  );
}