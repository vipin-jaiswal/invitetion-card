import { motion } from "framer-motion";
import emblemImage from "../assets/img/Screenshot_2026-10-12_114930-removebg-preview.png";

export default function Emblem({ stage, onOpenInvitation }) {
  const revealing = stage >= 5;

  return (
    <motion.div
      className="emblem-wrap absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      animate={{
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 1,
      }}
      transition={{ duration: 0 }}
      style={{ transformPerspective: 1000, transformOrigin: "50% 88%" }}
    >
      <motion.button
        type="button"
        onClick={onOpenInvitation}
        disabled={stage !== 0}
        aria-label="Open the wedding invitation"
        className="emblem-action pointer-events-auto block cursor-pointer border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 disabled:cursor-default"
        animate={{ filter: "drop-shadow(0 0 12px rgba(240,190,77,.38)) drop-shadow(0 20px 28px rgba(0,0,0,.7))" }}
        transition={{ duration: 0 }}
      >
        <img
          src={emblemImage}
          alt=""
          draggable="false"
          className="emblem-image block h-auto w-full select-none"
        />
      </motion.button>
    </motion.div>
  );
}

