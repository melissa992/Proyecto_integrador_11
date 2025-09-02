// ProgressBar.jsx
import React from "react";

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
        height: "20px",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "#4caf50",
          height: "100%",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
