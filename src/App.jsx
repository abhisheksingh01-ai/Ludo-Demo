import { useState } from "react";

const BASE_WIDTH = 1080;
const BASE_HEIGHT = 1920;

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="wrapper">
      <Screen
        img={import.meta.env.BASE_URL + `screens/s${step}.jpeg`}
        onClick={(x, y) => {
          console.log("CLICK:", x, y);

          // 1️⃣ Guest Login
          if (step === 1 && hit(x, y, 420, 1120, 660, 1220)) {
            setStep(2);
          }

          // 2️⃣ OK button (Gender popup)
          else if (step === 2 && hit(x, y, 300, 1000, 780, 1180)) {
            setStep(3);
          }

          // 3️⃣ Online card (Home)
          else if (step === 3 && hit(x, y, 120, 760, 520, 1120)) {
            setStep(4);
          }

          // 4️⃣ Online card (Mode select)
          else if (step === 4 && hit(x, y, 120, 760, 520, 1120)) {
            setStep(5);
          }

          // 5️⃣ Classic button
          else if (step === 5 && hit(x, y, 260, 780, 820, 1000)) {
            setStep(6);
          }

          // 6️⃣ Play button
          else if (step === 6 && hit(x, y, 260, 1100, 820, 1300)) {
            setStep(7);
          }
        }}
      />
    </div>
  );
}

// 🔍 Click detection helper
function hit(x, y, x1, y1, x2, y2) {
  return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

// 🖼️ Screen renderer
function Screen({ img, onClick }) {
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const scaleX = BASE_WIDTH / rect.width;
    const scaleY = BASE_HEIGHT / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    onClick(x, y);
  };

  return (
    <div className="screen" onClick={handleClick}>
      <img src={img} alt="screen" draggable={false} />
    </div>
  );
}
