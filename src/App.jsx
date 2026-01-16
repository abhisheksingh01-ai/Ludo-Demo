import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="screen">
      {/* Background Image */}
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

      {step === 3 && (
        <>
          {/* 👇 MOVED: Higher (15%) and to the Left (10%) */}
          <DownArrow style={{ left: "14%", top: "18%" }} /> 
          
          <Hotspot
            style={{ left: "5%", top: "40%", width: "45%", height: "25%" }}
            onNext={() => setStep(4)}
          />
        </>
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

      {/* 6️⃣ PLAY BUTTON */}
      {step === 6 && (
        <Hotspot
          style={{
            left: "20%",
            bottom: "8%",
            width: "60%",
            height: "15%",
          }}
          onNext={() => setStep(7)}
        />
      )}

      {/* 7️⃣ NEW: LEFT SIDE ARROW (Bottom, 20% from Left) */}
      {step === 7 && (
        <>
          {/* ◀ Arrow: Moved further right (35%) and lower (12%) */}
          <LeftArrow style={{ left: "28%", bottom: "8%" }} />

          <Hotspot
            style={{ left: "5%", bottom: "10%", width: "30%", height: "20%" }}
            onNext={() => setStep(8)}
          />
        </>
      )}

    </div>
  );
}

/* 🔥 NEW LEFT ARROW COMPONENT */
function LeftArrow({ style }) {
  return (
    <div className="left-arrow" style={style}>
      ◀
    </div>
  );
}
function DownArrow({ style }) {
  return (
    <div className="down-arrow" style={style}>
      ▼
    </div>
  );
}

/* 🔥 UNIVERSAL HOTSPOT – REAL MOBILE SAFE */
function Hotspot({ style, onNext }) {
  return (
    <div
      className="hotspot"
      style={style}
      onTouchStart={(e) => {
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

/* 🔴 RED CROSS */
function RedCross({ onNext }) {
  return (
    <div
      className="red-cross"
      onTouchStart={(e) => {
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
