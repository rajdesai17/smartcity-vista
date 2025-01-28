import { motion } from "framer-motion";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";
import { AlertsWidget } from "@/components/dashboard/AlertsWidget";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { id: 1, title: "Community Meeting", date: "2024-02-20", location: "City Hall" },
  { id: 2, title: "Local Market", date: "2024-02-22", location: "Central Square" },
  { id: 3, title: "Art Exhibition", date: "2024-02-25", location: "Cultural Center" },
];

const ResidentDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Resident Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weather Widget */}
        <WeatherWidget />

        {/* Events Widget */}
        <DashboardCard title="Upcoming Events" className="lg:col-span-2">
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-lg flex items-center space-x-4"
              >
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-2">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DashboardCard>

        {/* Alerts Widget */}
        <AlertsWidget />

        {/* Local Services */}
        <DashboardCard title="Local Services" className="col-span-full md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer"
            >
              <h4 className="font-semibold">Parking Availability</h4>
              <p className="text-sm text-muted-foreground">Check nearby parking spots</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer"
            >
              <h4 className="font-semibold">Public Transport</h4>
              <p className="text-sm text-muted-foreground">View routes and schedules</p>
            </motion.div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default ResidentDashboard;