import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LudoBoard from "../assets/ludo-board.png";
import RewardImage from "../assets/reward-chest.png";

export default function LudoGameWithReward() {
  const [showReward, setShowReward] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">

      {/* 🌌 PURPLE GALAXY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0228] via-[#4b145f] to-[#0b0014]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_40%)]" />

      {/* ================= MAIN GAME SCREEN ================= */}
      {!showReward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <img
            src={LudoBoard}
            alt="Ludo Board"
            className="w-[360px] max-w-[92vw] rounded-[28px]
              shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      )}

      {/* ================= REWARD POPUP ================= */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Popup */}
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative flex flex-col items-center"
            >
              {/* ===== IMAGE + CLOSE BUTTON ===== */}
              <div className="relative">

                {/* ❌ CLOSE BUTTON (STATIC + THEME COLOR) */}
                <button
                  onClick={() => setShowReward(false)}
                  className="absolute top-3 right-3 z-20
                    w-9 h-9 rounded-full
                    bg-gradient-to-b from-pink-400 to-pink-600
                    text-white text-lg font-bold
                    flex items-center justify-center
                    shadow-[0_4px_0_#9d174d]
                    hover:brightness-110 transition"
                >
                  ✕
                </button>

                {/* Glow */}
                <div className="absolute inset-0 bg-yellow-400/30 blur-[120px] rounded-full" />

                {/* ✅ STATIC REWARD IMAGE (NO MOVEMENT) */}
                <img
                  src={RewardImage}
                  alt="Reward"
                  className="relative w-[320px] max-w-[90vw]
                    rounded-2xl
                    drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* CLAIM BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReward(false)}
                className="mt-6 px-12 py-3 rounded-full
                  bg-gradient-to-b from-pink-400 to-pink-600
                  text-white text-xl font-bold
                  shadow-[0_8px_0_#9d174d]"
              >
                Claim
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
