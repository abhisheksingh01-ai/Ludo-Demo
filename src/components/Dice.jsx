import { motion } from "framer-motion";

export default function Dice({ onRoll }) {
  const rollDice = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    onRoll(num);
  };

  return (
    <motion.div
      className="dice"
      whileTap={{ rotate: 360, scale: 1.2 }}
      onClick={rollDice}
    >
      🎲 ROLL
    </motion.div>
  );
}
