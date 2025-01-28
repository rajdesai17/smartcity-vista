import { motion } from "framer-motion";
import { Award, Bus, Leaf, User } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";

const badges = [
  { id: 1, name: "Public Transport Champion", icon: Bus, count: 50 },
  { id: 2, name: "Eco Warrior", icon: Leaf, count: 30 },
  { id: 3, name: "City Explorer", icon: Award, count: 25 },
];

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
          <User className="w-full h-full text-primary p-6" />
        </div>
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-muted-foreground">Smart City Resident</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.id * 0.1 }}
          >
            <DashboardCard title={badge.name}>
              <div className="text-center">
                <badge.icon className="h-12 w-12 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">{badge.count}</div>
                <p className="text-sm text-muted-foreground">Activities Completed</p>
              </div>
            </DashboardCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;