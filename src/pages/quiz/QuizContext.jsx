import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [score, setScore] = useState(0);

  // Datos simulados de usuarios para el medallero 3D
  const userScores = [
    { username: "Ana", score: 5 },
    { username: "Juan", score: 3 },
    { username: "Luis", score: 4 },
    { username: "Camilo", score: 7 },
    { username: "Mia", score: 5 },
    { username: "Melissa", score: 7 },
  ];

  function saveScore(newScore) {
    setScore(newScore);
  }

  return (
    <QuizContext.Provider value={{ score, saveScore, userScores }}>
      {children}
    </QuizContext.Provider>
  );
}
