"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  text: string;

  color?: string;

  onClick?: () => void;
};

export default function Button({
  text,

  color = "#2563eb",

  onClick,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.96,
      }}

      onClick={onClick}

      style={{
        backgroundColor: color,

        color: "white",

        border: "none",

        padding: "16px 24px",

        borderRadius: "14px",

        cursor: "pointer",

        fontSize: "16px",

        fontWeight: "bold",

        transition: "0.2s",

        boxShadow:
          "0px 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      {text}
    </motion.button>
  );
}