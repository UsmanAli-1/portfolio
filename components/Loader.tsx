// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-900/30 to-pink-900/20 backdrop-blur-lg ">
//       <motion.div
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{
//           duration: 1,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <Image
//           src="/images/icon.png" 
//           alt="Wearify"
//           width={120}
//           height={120}
//           priority
//         />
//       </motion.div>
//     </div>
//   );
// }



"use client";
import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return (

    <Html center>
      <div
        style={{ transform: 'translateY(-60px)' }} // 👈 move UP
        className="flex flex-col items-center gap-3"
      >
        <div className="w-20 h-20 border-6 border-blue-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-blue-300 text-xs">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </Html>

  );
}
