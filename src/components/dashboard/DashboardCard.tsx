import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard = ({ title, children, className }: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("glass p-6 rounded-lg", className)}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </motion.div>
  );
};