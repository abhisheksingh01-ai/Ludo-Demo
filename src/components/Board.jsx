import Token from "./Token";

export default function Board({ position }) {
  return (
    <div className="board">
      {[...Array(25)].map((_, i) => (
        <div key={i} className="cell">
          {i === position && <Token />}
        </div>
      ))}
    </div>
  );
}
