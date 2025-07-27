export default function Feedback({ message, correct }) {
  return (
    <div
      style={{
        color: correct ? "green" : "red",
        fontWeight: "bold",
        marginTop: "1rem",
        animation: "fadeIn 0.5s",
      }}
    >
      {message}
    </div>
  );
}
