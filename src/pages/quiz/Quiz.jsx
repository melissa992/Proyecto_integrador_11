import React, { useState, useContext } from "react";
import { QuizContext } from "./QuizContext";
import ProgressBar from "./ProgressBar";
import Feedback from "./Feedback";
import Leaderboard3D from "./Leaderboard3D";

const questions = [
  {
    question: "¿Qué es una arritmia?",
    options: [
      "Latido irregular del corazón",
      "Presión arterial alta",
      "Un tipo de infección",
      "Dolor en el pecho",
    ],
    correct: 0,
  },
  {
    question: "¿Cuál es un síntoma común de fibrilación auricular?",
    options: ["Palpitaciones", "Dolor de cabeza", "Fiebre", "Náuseas"],
    correct: 0,
  },
  {
    question:
      "¿Qué órgano es el principal afectado por las enfermedades cardíacas?",
    options: ["Corazón", "Pulmones", "Riñones", "Hígado"],
    correct: 0,
  },
];

export default function Quiz() {
  const { score, saveScore } = useContext(QuizContext);
  const [current, setCurrent] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[current];

  function handleAnswer(index) {
    const correctAnswer = currentQuestion.correct;
    const answerIsCorrect = index === correctAnswer;
    setIsCorrect(answerIsCorrect);
    setShowFeedback(true);

    if (answerIsCorrect) {
      saveScore(score + 1);
    }
  }

  function handleNext() {
    setShowFeedback(false);
    setIsCorrect(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      alert(
        `¡Quiz terminado! Tu puntuación es ${score} de ${questions.length}`
      );
      setCurrent(0);
      saveScore(0);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>
        Pregunta {current + 1} de {questions.length}
      </h2>
      <ProgressBar progress={(current + 1) / questions.length} />

      <h3>{currentQuestion.question}</h3>
      <div>
        {currentQuestion.options.map((option, i) => (
          <button
            key={i}
            disabled={showFeedback}
            onClick={() => handleAnswer(i)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              cursor: showFeedback ? "not-allowed" : "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div style={{ marginTop: 20 }}>
          {isCorrect ? (
            <p style={{ color: "green" }}>¡Correcto!</p>
          ) : (
            <p style={{ color: "red" }}>
              Incorrecto. La respuesta correcta es:{" "}
              <strong>
                {currentQuestion.options[currentQuestion.correct]}
              </strong>
            </p>
          )}
          <button onClick={handleNext}>Siguiente pregunta</button>
        </div>
      )}

      <p style={{ marginTop: 20 }}>
        Puntuación actual: {score} / {questions.length}
      </p>

      <div style={{ marginTop: 50 }}>
        <h3>Medallero 3D</h3>
        <div style={{ width: "600px", height: "400px" }}>
          <Leaderboard3D />
        </div>
      </div>
    </div>
  );
}
