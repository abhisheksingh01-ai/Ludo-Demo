import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="screen">
      {/* Background image */}
      <img
        src={import.meta.env.BASE_URL + `screens/s${step}.jpeg`}
        className="bg"
        alt="screen"
        draggable={false}
      />

      {/* 1️⃣ Guest Login */}
      {step === 1 && (
        <Hotspot
          style={{ left: "20%", top: "60%", width: "60%", height: "10%" }}
          onNext={() => setStep(2)}
        />
      )}

      {/* 2️⃣ Gender Selection */}
      {step === 2 && (
        <div className="gender-card">
          <RedCross onNext={() => setStep(3)} />
        </div>
      )}

      {/* 3️⃣ Online Card */}
      {step === 3 && (
        <Hotspot
          style={{ left: "5%", top: "40%", width: "45%", height: "25%" }}
          onNext={() => setStep(4)}
        />
      )}

      {/* 4️⃣ Online Popup */}
      {step === 4 && (
        <Hotspot
          style={{ left: "10%", top: "42%", width: "80%", height: "22%" }}
          onNext={() => setStep(5)}
        />
      )}

      {/* 5️⃣ Classic Button */}
      {step === 5 && (
        <Hotspot
          style={{ left: "20%", top: "40%", width: "60%", height: "20%" }}
          onNext={() => setStep(6)}
        />
      )}

      {/* 6️⃣ ▶ PLAY BUTTON – MOBILE FIXED */}
      {step === 6 && (
        <Hotspot
          style={{ left: "20%", top: "65%", width: "60%", height: "15%" }}
          onNext={() => setStep(7)}
        />
      )}
    </div>
  );
}

/* 🔥 Universal Hotspot */
function Hotspot({ style, onNext }) {
  return (
    <div
      className="hotspot"
      style={style}
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }}
    />
  );
}

/* 🔴 Red Cross */
function RedCross({ onNext }) {
  return (
    <div
      className="red-cross"
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onNext();
      }}
    >
      ✕
    </div>
  );
}
