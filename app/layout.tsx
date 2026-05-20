



import {
  darkTheme,
  lightTheme,
} from "./theme";
import "./globals.css"
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "FocusFlow",
  description:
    "Productivity SaaS App",
};

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
}) {
  


  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor:
            "#020617",
            color: "white",
            minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {/* SIDEBAR */}

          <Sidebar />

          {/* PAGE CONTENT */}

          <div
            style={{
              marginLeft: "260px",
              width: "100%",
              minHeight: "100vh",
              padding: "25px",
              color: "theme.text",
            }}
          >
            <button
  
  style={{
    position: "fixed",

    top: "20px",

    right: "20px",

    backgroundColor:
      darkTheme.card,

    color: darkTheme.text,

    border: `1px solid ${darkTheme.border}`,

    padding: "14px 18px",

    borderRadius: "14px",

    cursor: "pointer",

    zIndex: 999,
  }}
>
  
</button>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}