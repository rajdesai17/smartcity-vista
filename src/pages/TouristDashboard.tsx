import { motion } from "framer-motion";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";
import { AlertsWidget } from "@/components/dashboard/AlertsWidget";
import { Landmark, Utensils, Music, MapPin } from "lucide-react";

const attractions = [
  {
    id: 1,
    title: "Historical Museum",
    category: "Culture",
    rating: 4.8,
    location: "Downtown",
  },
  {
    id: 2,
    title: "Central Park",
    category: "Nature",
    rating: 4.9,
    location: "City Center",
  },
  {
    id: 3,
    title: "Art Gallery",
    category: "Culture",
    rating: 4.7,
    location: "Arts District",
  },
];

const events = [
  {
    id: 1,
    title: "Food Festival",
    date: "This Weekend",
    location: "City Square",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Live Concert",
    date: "Next Friday",
    location: "City Arena",
    icon: Music,
  },
];

const TouristDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Tourist Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Weather Widget */}
        <WeatherWidget />

        {/* Popular Attractions */}
        <DashboardCard title="Popular Attractions" className="lg:col-span-2">
          <div className="space-y-4">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <Landmark className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">{attraction.title}</div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-2">
                      <span>{attraction.category}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {attraction.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold">★ {attraction.rating}</div>
              </motion.div>
            ))}
          </div>
        </DashboardCard>

        {/* Upcoming Events */}
        <DashboardCard title="Events & Festivals" className="col-span-full md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <event.icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">{event.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.date} • {event.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </DashboardCard>

        {/* Alerts Widget */}
        <AlertsWidget />

        {/* Transport Info */}
        <DashboardCard title="Getting Around" className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer"
            >
              <h4 className="font-semibold">Public Transport</h4>
              <p className="text-sm text-muted-foreground">View routes and schedules</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer"
            >
              <h4 className="font-semibold">Bike Rentals</h4>
              <p className="text-sm text-muted-foreground">Find nearby stations</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer"
            >
              <h4 className="font-semibold">Walking Tours</h4>
              <p className="text-sm text-muted-foreground">Discover the city on foot</p>
            </motion.div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default TouristDashboard;