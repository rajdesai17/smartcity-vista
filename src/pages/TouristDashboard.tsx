import { motion } from "framer-motion";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { WeatherWidget } from "@/components/dashboard/WeatherWidget";
import { AlertsWidget } from "@/components/dashboard/AlertsWidget";
import { Landmark, Utensils, Music, MapPin, Star } from "lucide-react";
import { CityMap } from '@/components/map/CityMap';
import { EventDialog } from '@/components/events/EventDialog';
import { useState } from 'react';
import { AttractionDialog } from "@/components/tourist/AttractionDialog";
import { TouristTransportDialog } from "@/components/tourist/TouristTransportDialog";

const attractions = [
  {
    id: 1,
    title: "Historical Museum",
    category: "Culture",
    rating: 4.8,
    location: "Downtown",
    image: "museum.jpg",
    description: "A world-class museum featuring extensive collections of artifacts, art, and historical exhibits. Interactive displays and guided tours available.",
    openingHours: "9:00 AM - 6:00 PM",
    website: "https://museum.example.com",
    phone: "+1 234 567 8900"
  },
  {
    id: 2,
    title: "Central Park",
    category: "Nature",
    rating: 4.9,
    location: "City Center",
    image: "park.jpg"
  },
  {
    id: 3,
    title: "Art Gallery",
    category: "Culture",
    rating: 4.7,
    location: "Arts District",
    image: "gallery.jpg"
  },
];

const events = [
  {
    id: 1,
    title: "Food Festival",
    date: "This Weekend",
    location: "City Square",
    icon: Utensils,
    image: "food-festival.jpg",
    description: "Experience the city's largest food festival featuring local and international cuisines. Join us for cooking demonstrations, food tastings, and live entertainment.",
    attendees: 250
  },
  {
    id: 2,
    title: "Live Concert",
    date: "Next Friday",
    location: "City Arena",
    icon: Music,
    image: "concert.jpg",
    description: "An evening of live music featuring top local bands and international artists. Don't miss this spectacular musical event!",
    attendees: 500
  },
];

const touristPoints = [
  {
    position: [51.505, -0.09] as [number, number],
    name: "Historical Museum",
    description: "City's main museum"
  },
  {
    position: [51.51, -0.1] as [number, number],
    name: "Central Park",
    description: "Large urban park"
  },
  {
    position: [51.498, -0.085] as [number, number],
    name: "Art Gallery",
    description: "Contemporary art exhibitions"
  }
];

const TouristDashboard = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [isTransportDialogOpen, setIsTransportDialogOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 pt-20"> {/* Added pt-20 */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 bg-gradient-tourist bg-clip-text text-transparent"
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
                className="glass p-4 rounded-lg flex items-center justify-between hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAttraction(attraction)}
              >
                <div className="flex items-center space-x-4">
                  <Landmark className="h-6 w-6 text-primary animate-float-slow" />
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
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-semibold">{attraction.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </DashboardCard>

        {/* Events Section */}
        <DashboardCard title="Events & Festivals" className="col-span-full md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex items-center space-x-3">
                  <event.icon className="h-5 w-5 text-primary animate-float-slow" />
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

          {selectedEvent && (
            <EventDialog
              event={selectedEvent}
              isOpen={!!selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </DashboardCard>

        {/* Alerts Widget */}
        <AlertsWidget />

        {/* Transport Info */}
        <DashboardCard title="Getting Around" className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setIsTransportDialogOpen(true)}
            >
              <h4 className="font-semibold">Transport Options</h4>
              <p className="text-sm text-muted-foreground">View all ways to explore the city</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <h4 className="font-semibold">Bike Rentals</h4>
              <p className="text-sm text-muted-foreground">Find nearby stations</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <h4 className="font-semibold">Walking Tours</h4>
              <p className="text-sm text-muted-foreground">Discover the city on foot</p>
            </motion.div>
          </div>
          
          {/* Add the map */}
          <div className="mt-4">
            <CityMap 
              points={touristPoints}
              center={[51.505, -0.09]}
              zoom={14}
            />
          </div>
        </DashboardCard>
      </div>

      {/* Add Dialogs */}
      {selectedAttraction && (
        <AttractionDialog
          attraction={selectedAttraction}
          isOpen={!!selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
        />
      )}
      
      <TouristTransportDialog
        isOpen={isTransportDialogOpen}
        onClose={() => setIsTransportDialogOpen(false)}
      />
    </div>
  );
};

export default TouristDashboard;