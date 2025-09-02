// src/pages/quiz/Score.jsx
import React from "react";

const Score = ({ score, total }) => {
  return (
    <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem" }}>
      Puntaje: {score} / {total}
    </div>
  );
};

export default Score;
