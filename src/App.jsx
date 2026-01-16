import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);

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

      {/* 2️⃣ ❌ Cross Button (Gender popup) */}
      {step === 2 && (
        <Hotspot
          style={{ left: "82%", top: "10%", width: "12%", height: "10%" }}
          onNext={() => setStep(3)}
        />
      )}

      {/* 3️⃣ Online Card (Home) */}
      {step === 3 && (
        <Hotspot
          style={{ left: "5%", top: "40%", width: "45%", height: "25%" }}
          onNext={() => setStep(4)}
        />
      )}

      {/* 4️⃣ Online Card (Popup) */}
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

      {/* 6️⃣ Play Button */}
      {step === 6 && (
        <Hotspot
          style={{ left: "20%", top: "65%", width: "60%", height: "15%" }}
          onNext={() => setStep(7)}
        />
      )}

      {/* 7️⃣ Final Screen – no click */}
    </div>
  );
}

function Hotspot({ style, onNext }) {
  const handleTouch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onNext();
  };

  return (
    <div
      className="hotspot"
      style={style}
      onTouchStart={handleTouch}
    />
  );
}
