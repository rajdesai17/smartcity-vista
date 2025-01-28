import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";
import { AlertsWidget } from "@/components/dashboard/AlertsWidget";
import { Car, Users, Building2, Activity, TrendingUp } from "lucide-react";

const trafficData = [
  { time: "00:00", value: 30, congestion: 20 },
  { time: "04:00", value: 20, congestion: 15 },
  { time: "08:00", value: 80, congestion: 65 },
  { time: "12:00", value: 70, congestion: 55 },
  { time: "16:00", value: 90, congestion: 75 },
  { time: "20:00", value: 50, congestion: 40 },
];

const energyData = [
  { name: "Residential", value: 35 },
  { name: "Commercial", value: 45 },
  { name: "Industrial", value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-8"> {/* Added pt-20 for top padding */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
      >
        City Administrator Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-primary animate-float-slow" />
            <div>
              <div className="text-sm text-muted-foreground">Total Population</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">2.5M</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <Car className="h-8 w-8 text-primary animate-float-slow" />
            <div>
              <div className="text-sm text-muted-foreground">Traffic Density</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">75%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-primary animate-float-slow" />
            <div>
              <div className="text-sm text-muted-foreground">Infrastructure</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">92%</div>
            </div>
          </div>
        </motion.div>

        {/* Traffic Chart */}
        <DashboardCard title="Traffic Overview" className="col-span-full lg:col-span-2 hover:shadow-lg transition-all duration-300">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Energy Distribution */}
        <DashboardCard title="Energy Distribution" className="hover:shadow-lg transition-all duration-300">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={energyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {energyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
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