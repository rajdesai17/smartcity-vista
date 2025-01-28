import { motion } from "framer-motion";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";
import { AlertsWidget } from "@/components/dashboard/AlertsWidget";
import { Car, Users, Building2 } from "lucide-react";

const trafficData = [
  { time: "00:00", value: 30 },
  { time: "04:00", value: 20 },
  { time: "08:00", value: 80 },
  { time: "12:00", value: 70 },
  { time: "16:00", value: 90 },
  { time: "20:00", value: 50 },
];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        City Administrator Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Total Population</div>
              <div className="text-2xl font-bold">2.5M</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <Car className="h-8 w-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Traffic Density</div>
              <div className="text-2xl font-bold">75%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Infrastructure</div>
              <div className="text-2xl font-bold">92%</div>
            </div>
          </div>
        </motion.div>

        {/* Traffic Chart */}
        <DashboardCard title="Traffic Overview" className="col-span-full lg:col-span-2">
          <div className="h-[300px]">
            <LineChart
              data={trafficData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
            </LineChart>
          </div>
        </DashboardCard>

        {/* Weather Widget */}
        <WeatherWidget />

        {/* Alerts Widget */}
        <AlertsWidget />
      </div>
    </div>
  );
};

export default AdminDashboard;