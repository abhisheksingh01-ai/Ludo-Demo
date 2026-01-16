import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState(1);

  const next = (n) => setScreen(n);

  return (
    <div className="container">
      {screen === 1 && (
        <ImageScreen
          src="/images/1-login.png"
          hotspots={[
            { x: "50%", y: "65%", w: "60%", h: "8%", onClick: () => next(2) } // Guest Login
          ]}
        />
      )}

      {screen === 2 && (
        <ImageScreen
          src="/images/2-gender.jpeg"
          hotspots={[
            { x: "78%", y: "18%", w: "8%", h: "8%", onClick: () => next(3) } // ❌ Cross
          ]}
        />
      )}

      {screen === 3 && (
        <ImageScreen
          src="/images/3-home.jpeg"
          hotspots={[
            { x: "25%", y: "45%", w: "30%", h: "18%", onClick: () => next(4) } // Online Card
          ]}
        />
      )}

      {screen === 4 && (
        <ImageScreen
          src="/images/4-online.jpeg"
          hotspots={[
            { x: "25%", y: "45%", w: "50%", h: "18%", onClick: () => next(5) }
          ]}
        />
      )}

      {screen === 5 && (
        <ImageScreen
          src="/images/5-classic.jpeg"
          hotspots={[
            { x: "25%", y: "40%", w: "50%", h: "18%", onClick: () => next(6) } // Classic
          ]}
        />
      )}

      {screen === 6 && (
        <ImageScreen
          src="/images/6-play.jpeg"
          hotspots={[
            { x: "20%", y: "65%", w: "60%", h: "12%", onClick: () => next(7) } // Play
          ]}
        />
      )}

      {screen === 7 && (
        <ImageScreen src="/images/7-board.jpeg" hotspots={[]} />
      )}
    </div>
  );
}

function ImageScreen({ src, hotspots }) {
  return (
    <div className="screen">
      <img src={src} className="bg" />
      {hotspots.map((h, i) => (
        <div
          key={i}
          className="hotspot"
          style={{ left: h.x, top: h.y, width: h.w, height: h.h }}
          onClick={h.onClick}
        />
      ))}
    </div>
  );
}
