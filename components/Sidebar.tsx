import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #1e293b",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          FocusFlow
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
           <Link href="/dashboard" style={linkStyle}>
    Dashboard
  </Link>

  <Link href="/habits" style={linkStyle}>
    Habits
  </Link>

  <Link href="/finance" style={linkStyle}>
    Finance
  </Link>

  <Link href="/analytics" style={linkStyle}>
    Analytics
  </Link>

  <Link href="/settings" style={linkStyle}>
    Settings
    </Link>
        </div>
      </div>

      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "#1e293b",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
          }}
        >
          Logged in as
        </p>

        <h3
          style={{
            marginTop: "8px",
          }}
        >
          Aman
        </h3>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#1e293b",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "14px",
  fontSize: "18px",
  textAlign: "left" as const,
  cursor: "pointer",
};
const linkStyle = {
  backgroundColor: "#1e293b",
  color: "white",
  padding: "16px",
  borderRadius: "14px",
  textDecoration: "none",
  fontSize: "18px",
};