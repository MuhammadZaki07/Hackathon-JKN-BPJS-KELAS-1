import { motion } from "framer-motion";
import { FaMedkit } from "react-icons/fa"; // Font Awesome medkit

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <FaMedkit className="h-12 w-12 text-primary animate-pulse" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-muted-foreground"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
