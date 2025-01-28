import { Bell } from "lucide-react";
import { DashboardCard } from "./DashboardCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const alerts = [
  { id: 1, type: "emergency", message: "Heavy traffic on Main Street" },
  { id: 2, type: "warning", message: "Scheduled maintenance in Central Park" },
  { id: 3, type: "info", message: "New event: City Festival this weekend" },
];

export const AlertsWidget = () => {
  return (
    <DashboardCard title="Alerts & Notifications">
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "p-4 rounded-md flex items-center space-x-3",
              alert.type === "emergency" ? "bg-destructive/10 text-destructive" :
              alert.type === "warning" ? "bg-yellow-500/10 text-yellow-600" :
              "bg-primary/10 text-primary"
            )}
          >
            <Bell className="h-5 w-5" />
            <span>{alert.message}</span>
          </motion.div>
        ))}
      </div>
    </DashboardCard>
  );
};