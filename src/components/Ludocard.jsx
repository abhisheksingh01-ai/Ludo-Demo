import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Ludocard = () => {
    const navigate = useNavigate();
  return (
    <div className="ludo-wrapper">
      {/* In React, we typically place external font links in index.html, 
         but to keep this file standalone and "exact" as requested, 
         we are including it here.
      */}
      <link href="https://fonts.googleapis.com/css2?family=Titan+One&family=Nunito:wght@900&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{__html: `
        :root {
            --gold-light: #fff5cc;
            --gold-main: #ffcc00;
            --gold-dark: #e6ac00;
            --shadow-gold: #b38600;
            --red-pawn: #ff4d4d;
            --red-dark: #cc0000;
            --grass-light: #9be04d;
            --grass-dark: #7ec42f;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* Mimicking the body style from original code */
        .ludo-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #000;
            font-family: 'Titan One', cursive;
            width: 100%;
        }

        /* THE PHONE SCREEN */
        .screen {
            width: 100%;
            max-width: 414px; /* Standard large phone width */
            height: 850px;
            position: relative;
            background: linear-gradient(to bottom, #201654 0%, #302b85 40%, #4facfe 100%);
            overflow: hidden;
            border-radius: 30px;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
            border: 8px solid #1a1a1a;
        }

        /* --- BACKGROUND SKY --- */
        .moon {
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
            filter: blur(20px);
        }
        
        .stars {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 50%;
            background-image: 
                radial-gradient(white 1px, transparent 1px),
                radial-gradient(rgba(255,255,255,0.7) 2px, transparent 2px);
            background-size: 50px 50px, 120px 120px;
            background-position: 0 0, 40px 60px;
            opacity: 0.6;
        }

        /* --- THE LOGO COMPLEX --- */
        .logo-container {
            position: absolute;
            top: 25%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            height: 300px;
            z-index: 20;
            text-align: center;
        }

        /* Floating Green Platform */
        .platform {
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%) rotateX(60deg) rotateZ(-45deg);
            width: 180px;
            height: 180px;
            background: #6dc92d;
            border-radius: 20px;
            box-shadow: 
                -10px 10px 0 #4a8a1c, /* 3D Side */
                -20px 20px 0 #366614, /* 3D Side Darker */
                -40px 40px 50px rgba(0,0,0,0.5); /* Drop Shadow */
            border: 5px solid #8ce34b;
            z-index: 1;
        }

        /* "LUDO" Text */
        .text-ludo {
            position: relative;
            font-size: 95px;
            line-height: 0.8;
            z-index: 10;
            color: var(--gold-main);
            /* Gradient Fill for Text */
            background: linear-gradient(180deg, #fff9db 10%, #ffcc00 40%, #ffaa00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            /* The 3D Block Effect */
            filter: drop-shadow(0px 2px 0px #d4a000)
                    drop-shadow(0px 4px 0px #b38600)
                    drop-shadow(0px 6px 0px #8f6b00)
                    drop-shadow(0px 10px 10px rgba(0,0,0,0.3));
            transform: perspective(500px) rotateX(10deg);
        }
        
        /* "TALENT" Text */
        .text-talent {
            position: relative;
            font-family: 'Nunito', sans-serif;
            font-size: 52px;
            color: white;
            text-transform: uppercase;
            z-index: 11;
            margin-top: -5px;
            letter-spacing: 1px;
            /* Orange 3D Block */
            text-shadow: 
                0px 3px 0 #d15419,
                0px 6px 0 #a33e10,
                0px 8px 0 #7a2e0c,
                0px 15px 20px rgba(0,0,0,0.4);
            transform: perspective(500px) rotateX(10deg) scaleX(0.95);
        }

        /* Flags */
        .flag-pole {
            position: absolute;
            top: 0;
            width: 6px;
            height: 80px;
            background: linear-gradient(90deg, #8b4513, #a0522d);
            border-radius: 4px;
            z-index: 2;
        }
        .flag-cloth {
            position: absolute;
            top: 5px;
            width: 0; height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 45px solid #ff3333;
            filter: drop-shadow(2px 2px 0 #990000);
        }
        .f-left { left: 30px; transform: rotate(-15deg); }
        .f-left .flag-cloth { left: 4px; top: 2px; transform: rotate(-5deg); }
        
        .f-right { right: 30px; transform: rotate(15deg); }
        .f-right .flag-cloth { left: auto; right: 4px; top: 2px; transform: rotate(5deg) scaleX(-1); }

        /* Gold Star Top */
        .star-top {
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 60px;
            color: #ffd700;
            z-index: 15;
            filter: drop-shadow(0 0 10px gold) drop-shadow(0 4px 0 #b8860b);
        }
        .star-top::before { content: '★'; }

        /* --- TERRAIN --- */
        .terrain {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40%;
            z-index: 5;
        }
        .hill {
            position: absolute;
            background: radial-gradient(circle at 50% 0, var(--grass-light), var(--grass-dark));
            border-radius: 50% 50% 0 0;
            box-shadow: inset 0 10px 20px rgba(255,255,255,0.2);
        }
        
        /* Grid Pattern overlay */
        .grid-hill {
            background-image: 
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px),
                radial-gradient(circle at 50% 0, var(--grass-light), var(--grass-dark));
            background-size: 40px 40px, 40px 40px, 100% 100%;
        }

        .h-back-1 { width: 120%; height: 300px; left: -20%; bottom: 60px; transform: rotate(-10deg); z-index: 6; }
        .h-back-2 { width: 120%; height: 300px; right: -20%; bottom: 60px; transform: rotate(10deg); z-index: 6; }
        .h-main { 
            width: 150%; 
            height: 350px; 
            left: -25%; 
            bottom: -100px; 
            z-index: 7; 
            /* Curved perspective grid */
            background: radial-gradient(at center top, #9be04d, #6db326);
        }
        /* Draw grid lines manually for perspective */
        .h-main::after {
            content: ''; position: absolute; top:0; left:0; right:0; bottom:0;
            background-image: linear-gradient(rgba(0,50,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,50,0,0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            border-radius: 50% 50% 0 0;
            mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }


        /* --- 3D PAWN --- */
        .pawn { position: absolute; z-index: 30; }
        
        .p-head {
            width: 60px; height: 60px;
            border-radius: 50%;
            position: relative;
            z-index: 4;
            /* High Gloss Shine */
            background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 20%);
        }
        
        .p-collar {
            width: 50px; height: 12px;
            border-radius: 10px;
            margin: -8px auto 0;
            position: relative;
            z-index: 3;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        
        .p-body {
            width: 44px; height: 60px;
            margin: -6px auto 0;
            position: relative;
            z-index: 2;
            border-radius: 50% 50% 20% 20% / 80% 80% 10% 10%;
        }

        .p-base {
            width: 70px; height: 22px;
            border-radius: 50%;
            margin: -12px auto 0;
            position: relative;
            z-index: 1;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }

        /* Red Pawn (Center) */
        .p-red { bottom: 40px; left: 50%; transform: translateX(-50%) scale(1.4); }
        .p-red .p-head { background-color: #e02e2e; background-image: radial-gradient(circle at 30% 30%, #ff8f8f 5%, transparent 40%); box-shadow: inset -5px -5px 15px #8a0000; }
        .p-red .p-collar { background: #b30000; }
        .p-red .p-body { background: linear-gradient(90deg, #990000, #ff4d4d, #990000); }
        .p-red .p-base { background: radial-gradient(#d60000, #800000); }

        /* Yellow Pawn (Back) */
        .p-yellow { bottom: 130px; right: 60px; transform: scale(0.9); z-index: 10; filter: blur(0.5px); }
        .p-yellow .p-head { background-color: #ffd700; background-image: radial-gradient(circle at 30% 30%, #ffffcc 5%, transparent 40%); box-shadow: inset -5px -5px 15px #b8860b; }
        .p-yellow .p-collar { background: #d4a000; }
        .p-yellow .p-body { background: linear-gradient(90deg, #b8860b, #ffd700, #b8860b); }
        .p-yellow .p-base { background: radial-gradient(#ffd700, #b8860b); }


        /* --- DICE --- */
        .dice {
            position: absolute;
            bottom: 140px;
            left: 70px;
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 10px;
            transform: rotate(-15deg) skewX(5deg);
            z-index: 20;
            /* 3D Sides */
            box-shadow: 
                2px 4px 0 #bbb, 
                4px 8px 0 #999,
                10px 20px 20px rgba(0,0,0,0.4);
            display: flex;
            flex-wrap: wrap;
            padding: 8px;
            justify-content: space-between;
            align-content: space-between;
        }
        .pip {
            width: 10px; height: 10px;
            background: #333;
            border-radius: 50%;
            box-shadow: inset 1px 1px 2px black;
        }
        /* 4 pips layout */
        .dice .pip:nth-child(1) { margin-right: 5px; } 
      `}} />

      <div className="screen">
        
        <div className="moon"></div>
        <div className="stars"></div>

        <div className="logo-container">
            <div className="star-top"></div>
            
            <div className="flag-pole f-left"><div className="flag-cloth"></div></div>
            <div className="flag-pole f-right"><div className="flag-cloth"></div></div>

            <div className="platform"></div>

            <div className="text-ludo">LUDO</div>
            <div className="text-talent">Masti</div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-50">
  <motion.button
    onClick={() => navigate("/game")}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 12 }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255,215,0,0.9)"
    }}
    whileTap={{ scale: 0.95 }}
    className="
      relative px-14 py-4
      text-[22px] font-[900] tracking-wide
      text-[#5c3a00]
      rounded-full
      bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500
      shadow-[0_8px_0_#b88a00,0_18px_35px_rgba(0,0,0,0.45)]
      transition-all duration-150
      select-none
      overflow-hidden
    "
  >
    {/* Shine */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-120%] animate-[shine_2.5s_infinite]" />

    GET STARTED
  </motion.button>
</div>

        <div className="terrain">
            <div className="hill h-back-1 grid-hill"></div>
            <div className="hill h-back-2 grid-hill"></div>
            <div className="hill h-main"></div>
        </div>

        <div className="dice">
            <div className="pip"></div>
            <div className="pip"></div>
            <div className="pip"></div>
            <div className="pip"></div>
        </div>

        <div className="pawn p-yellow">
            <div className="p-head"></div>
            <div className="p-collar"></div>
            <div className="p-body"></div>
            <div className="p-base"></div>
        </div>

        <div className="pawn p-red">
            <div className="p-head"></div>
            <div className="p-collar"></div>
            <div className="p-body"></div>
            <div className="p-base"></div>
        </div>

      </div>
    </div>
  );
};

export default Ludocard;