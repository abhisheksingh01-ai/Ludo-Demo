import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    setShowExtras(false);
    const timer = setTimeout(() => {
      setShowExtras(true);
    }, 1000); // 1 second ka delay

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="screen">
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
          {showExtras && <RedCross onNext={() => setStep(3)} />}
        </div>
      )}

      {/* 3️⃣ Step with DownArrow */}
      {step === 3 && (
        <>
          {showExtras && <DownArrow style={{ left: "14%", top: "23%" }} />} 
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

      {/* 6️⃣ PLAY BUTTON + NEW RED CROSS */}
      {step === 6 && (
        <>
          {/* Play Button Hotspot */}
          <Hotspot
            style={{
              left: "20%",
              bottom: "8%",
              width: "60%",
              height: "15%",
            }}
            onNext={() => {}} // Play button click par kuch nahi hoga ya aap jo chahein wo add karein
          />
          
          {/* ✅ Naya Red Cross Step 6 par (Step 2 wali position) */}
          <div className="gender-card">
            {showExtras && <RedCross onNext={() => setStep(7)} />}
          </div>
        </>
      )}

      {/* 7️⃣ LEFT SIDE ARROW */}
      {step === 7 && (
        <>
          {showExtras && <LeftArrow style={{ left: "28%", bottom: "15%" }} />}
          <Hotspot
            style={{ left: "5%", bottom: "10%", width: "30%", height: "20%" }}
            onNext={() => setStep(8)}
          />
        </>
      )}
    </div>
  );
}

/* --- Components (Same as before) --- */
function LeftArrow({ style }) {
  return <div className="left-arrow" style={style}>◀</div>;
}
function DownArrow({ style }) {
  return <div className="down-arrow" style={style}>▼</div>;
}
function Hotspot({ style, onNext }) {
  return (
    <div
      className="hotspot"
      style={style}
      onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); onNext(); }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNext(); }}
    />
  );
}
function RedCross({ onNext }) {
  return (
    <div
      className="red-cross"
      onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); onNext(); }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onNext(); }}
    >
      ✕
    </div>
  );
}