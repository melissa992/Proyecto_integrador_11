import React from "react";
import { QuizProvider } from "./QuizContext";
import Quiz from "./Quiz";
import Leaderboard3D from "./Leaderboard3D";

export default function AppRoot() {
  return (
    <QuizProvider>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h1>Quiz Interactivo</h1>
          <Quiz />
        </div>
        <div style={{ flex: 1 }}>
          <h1>Medallero 3D con físicas</h1>
          <Leaderboard3D />
        </div>
      </div>
    </QuizProvider>
  );
}
