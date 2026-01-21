import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [showExtras, setShowExtras] = useState(false);

  // 30-second loading timer (shortened for testing to 2s, change to 30000 for 30s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // Handle step-based animations (delaying the RedCross/Arrows)
  useEffect(() => {
    if (isLoading) return;
    setShowExtras(false);
    const timer = setTimeout(() => {
      setShowExtras(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [step, isLoading]);

  // LOADING SCREEN RENDER
  if (isLoading) {
    return (
      <div className="loading-screen">
        <video
          src={import.meta.env.BASE_URL + "screens/loading.mp4"}
          className="loading-video"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // MAIN APP RENDER
  return (
    <div className="screen">
      <img
        src={import.meta.env.BASE_URL + `screens/s${step}.jpeg`}
        className="bg"
        alt="screen"
        draggable={false}
      />

      {/* Step 1: Login Screen Hotspots */}
      {step === 1 && (
        <>
          {/* imo Login Area */}
          <Hotspot
            style={{ left: "15%", top: "46%", width: "70%", height: "9%" }}
            onNext={() => setStep(2)}
          />
          {/* Facebook Login Area */}
          <Hotspot
            style={{ left: "15%", top: "58%", width: "70%", height: "9%" }}
            onNext={() => setStep(2)}
          />
          {/* Guest Login Area */}
          <Hotspot
            style={{ left: "30%", top: "72%", width: "40%", height: "5%" }}
            onNext={() => setStep(2)}
          />
        </>
      )}

      {/* Step 2: Gender Selection Popup */}
      {step === 2 && (
        <div className="gender-card">
          {showExtras && <RedCross onNext={() => setStep(3)} />}
        </div>
      )}

      {/* Step 3: Interaction Step */}
      {step === 3 && (
        <>
          {showExtras && <DownArrow style={{ left: "14%", top: "23%" }} />}
          <Hotspot
            style={{ left: "5%", top: "40%", width: "45%", height: "25%" }}
            onNext={() => setStep(4)}
          />
        </>
      )}

      {/* Step 4: Online Popup */}
      {step === 4 && (
        <Hotspot
          style={{ left: "10%", top: "42%", width: "80%", height: "22%" }}
          onNext={() => setStep(5)}
        />
      )}

      {/* Step 5: Mode Selection */}
      {step === 5 && (
        <Hotspot
          style={{ left: "20%", top: "40%", width: "60%", height: "20%" }}
          onNext={() => setStep(6)}
        />
      )}

      {/* Step 6: Play Button */}
      {step === 6 && (
        <>
          <Hotspot
            style={{ left: "20%", bottom: "8%", width: "60%", height: "15%" }}
            onNext={() => {}}
          />
          <div className="gender-card">
            {showExtras && <RedCross onNext={() => setStep(7)} />}
          </div>
        </>
      )}

      {/* Step 7: Final Step */}
      {step === 7 && (
        <>
          {showExtras && <LeftArrow style={{ left: "28%", bottom: "15%" }} />}
          <Hotspot
            style={{ left: "5%", bottom: "10%", width: "30%", height: "20%" }}
          />
        </>
      )}
    </div>
  );
}

/* --- Sub-Components --- */
function LeftArrow({ style }) { return <div className="left-arrow" style={style}>◀</div>; }
function DownArrow({ style }) { return <div className="down-arrow" style={style}>▼</div>; }
function Hotspot({ style, onNext }) {
  return (
    <div
      className="hotspot"
      style={style}
      onTouchStart={(e) => { e.preventDefault(); onNext(); }}
      onClick={(e) => { e.preventDefault(); onNext(); }}
    />
  );
}
function RedCross({ onNext }) {
  return (
    <div className="red-cross" onClick={onNext}>✕</div>
  );
}